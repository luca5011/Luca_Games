# Unity WebGL 게임 갤러리

## 배포 전 해야 할 일

1. **Neon 콘솔**
   - Auth 페이지에서 Auth URL 복사
   - Data API 페이지에서 "Use Neon Auth" + "Grant public schema access" 켜고 Enable → Data API URL 복사
   - `neonClient.js`의 두 URL을 실제 값으로 교체

2. **DB 세팅**
   - Neon SQL Editor에서 `schema.sql` 전체 실행

3. **관리자 계정 최초 1회 생성**
   - `signup.html`을 임시로 열어 이메일을 `luca1234@admin.local`, 원하는 비밀번호로 가입
   - 가입 후에는 이 계정 정보로 `login.html`에서 `luca1234` + 비밀번호로 로그인하면 자동으로 `admin.html`로 이동

4. **게임 파일 업로드**
   - 유니티/엔트리 WebGL 빌드 폴더를 이 저장소에 넣고 (예: `games/게임이름/Build/`)
   - GitHub Pages로 배포 후 각 파일의 실제 URL을 `admin.html`에서 게임 추가 시 입력

## 파일 구성

- `neonClient.js` — Neon Auth + Data API 클라이언트 설정 (CDN import, 번들러 불필요)
- `schema.sql` — DB 테이블 + RLS 정책
- `signup.html` — 일반 유저 회원가입 (공개)
- `login.html` — 공통 로그인, 관리자/일반유저 자동 분기
- `admin.html` — 관리자 전용, 게임 추가/삭제
- `index.html` — 일반 유저용, 게임 목록/플레이/점수기록/댓글 (로그인 필요)

## 참고

- `neon.auth.signUp.email` / `signIn.email` 등 메서드명은 `@neondatabase/neon-js` 최신 버전 기준입니다.
  실행 중 에러가 나면 콘솔 에러 메시지를 확인해 메서드 시그니처를 맞춰주세요.
- 점수 기록은 Unity 쪽에서 브라우저의 `window.RecordScore(점수)` 함수를 호출하도록
  (`Application.ExternalCall` 또는 `.jslib` 플러그인으로) 연결해야 실제로 저장됩니다.
