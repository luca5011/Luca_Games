import { createClient } from 'https://esm.sh/@neondatabase/neon-js';

// ↓↓↓ Neon 콘솔 > Auth 페이지 / Data API 페이지에서 실제 값으로 교체하세요 ↓↓↓
export const neon = createClient({
  auth: {
    url: 'https://ep-xxx.neon.tech/neondb/auth',
  },
  dataApi: {
    url: 'https://ep-xxx.neon.tech/neondb/rest/v1',
  },
});

// 관리자 판별용 고정 이메일 (관리자 아이디 luca1234를 내부적으로 이 이메일로 변환)
export const ADMIN_EMAIL = 'luca1234@admin.local';
