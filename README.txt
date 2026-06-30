주문출고 PRO PWA v43 - No Service Worker 안정판

목적:
- iPhone Safari 오류 "Response served by service worker has redirections" 완전 차단
- Service Worker 캐시 제거
- 출고 즉시 반영 기능 유지
- 오늘 실사용 안정성 우선

업로드:
1. ZIP 압축 해제
2. GitHub 저장소에 아래 6개 파일 덮어쓰기
   - index.html
   - manifest.json
   - sw.js
   - icon-192.png
   - icon-512.png
   - README.txt
3. Commit changes
4. Cloudflare 자동 배포 대기
5. 기존 홈화면 앱 삭제
6. iPhone 설정 > Safari > 고급 > 웹 사이트 데이터 > jumunchulgo-pro.pages.dev 삭제
7. Safari에서 https://jumunchulgo-pro.pages.dev/index.html?v=43 접속
8. 정상 확인 후 홈 화면에 추가
