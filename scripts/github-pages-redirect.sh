#!/usr/bin/env bash
# khy07181.github.io(구 주소)를 dochigarden.com/blog(새 주소)로 넘기는 리다이렉트 사이트를 만든다.
# GitHub Pages는 서버 301을 못 하므로, 빌드된 페이지마다 같은 경로에 canonical + meta refresh 스텁을 둔다.
# (구글은 0초 meta refresh를 영구 리다이렉트로 취급)
#
# 사용법: scripts/github-pages-redirect.sh <빌드된 public 디렉터리> <출력 디렉터리>
set -euo pipefail

SRC="${1:?빌드된 public 디렉터리}"
OUT="${2:?출력 디렉터리}"
TARGET="https://dochigarden.com/blog"

stub() { # $1: 리다이렉트 대상 URL
  cat <<EOF
<!doctype html>
<html><head><meta charset="utf-8">
<title>Moved to dochigarden.com/blog</title>
<link rel="canonical" href="$1">
<meta http-equiv="refresh" content="0; url=$1">
<script>location.replace("$1" + location.search + location.hash)</script>
</head><body><p>이 블로그는 <a href="$1">$1</a> 로 이사했습니다.</p></body></html>
EOF
}

rm -rf "$OUT"
mkdir -p "$OUT"

(cd "$SRC" && find . -name '*.html' ! -name '404.html') | while read -r f; do
  rel="${f#./}"
  path="${rel%.html}"
  case "$path" in
    index) path="" ;;
    */index) path="${path%index}" ;;
  esac
  mkdir -p "$OUT/$(dirname "$rel")"
  stub "$TARGET/$path" > "$OUT/$rel"
done

# 목록에 없는 구 URL(예: v4 시절 대문자 슬러그)은 경로를 그대로 붙여 넘긴다.
cat > "$OUT/404.html" <<'EOF'
<!doctype html>
<html><head><meta charset="utf-8"><meta name="robots" content="noindex">
<script>location.replace("https://dochigarden.com/blog" + location.pathname + location.search + location.hash)</script>
</head><body><p>이 블로그는 <a href="https://dochigarden.com/blog/">dochigarden.com/blog</a> 로 이사했습니다.</p></body></html>
EOF

# RSS 리더는 JS/meta 리다이렉트를 못 따라가므로 구 피드 주소에는 새 피드 사본을 둔다.
# (피드 안의 링크는 이미 dochigarden.com/blog 를 가리킴 → 기존 구독자도 새 글을 계속 받음)
cp "$SRC/index.xml" "$OUT/index.xml"

# 구글이 리다이렉트를 따라갈 수 있도록 크롤링 허용
printf "User-agent: *\nAllow: /\n" > "$OUT/robots.txt"
touch "$OUT/.nojekyll"
