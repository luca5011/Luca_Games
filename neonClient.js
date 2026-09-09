import { createClient } from 'https://esm.sh/@neondatabase/neon-js';

export const neon = createClient({
  auth: {
    url: 'https://ep-twilight-smoke-a5h60kn2.neonauth.us-east-2.aws.neon.tech/neondb/auth',      // ← 실제 Auth URL로 교체
  },
  dataApi: {
    url: 'https://ep-twilight-smoke-a5h60kn2.apirest.us-east-2.aws.neon.tech/neondb/rest/v1',   // ← 실제 Data API URL로 교체
  },
});
