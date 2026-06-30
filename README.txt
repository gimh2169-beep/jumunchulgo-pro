주문출고 PRO PWA v42 - Safari 캐시 오류 수정 안정판

수정사항:
- Safari 오류: Response served by service worker has redirections 해결
- Service Worker 네트워크 우선 방식으로 재작성
- 오래된 v40/v41 캐시 자동 제거
- 출고 버튼 즉시 반영 유지
- 검색결과 / 품목별 / 점포별 미출고 자동 갱신 유지
- v41/v40 localStorage 데이터 자동 승계

업로드 방법:
1. ZIP 압축 해제
2. GitHub 저장소 jumunchulgo-pro에 아래 파일을 덮어쓰기 업로드
   - index.html
   - manifest.json
   - sw.js
   - icon-192.png
   - icon-512.png
   - README.txt
3. Commit changes
4. Cloudflare Pages 자동 배포 대기
5. 아이폰 홈화면 앱 삭제 후 Safari에서 pages.dev 접속
6. 공유 > 홈 화면에 추가

중요:
- 기존 홈화면 앱은 반드시 삭제 후 다시 추가 권장
- Safari에서 한 번 직접 접속해서 정상 확인 후 홈화면에 추가
