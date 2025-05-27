// 공통된 URL 경로 변수 (필수)
const BASE_URL = apiBase.url();

// Display 관련 URL 경로
// const DISPLAY_PATH = `${BASE_URL}/display`;

// Display 관련 API URL 객체
export const REPORT_API_URLS: Record<string, string> = {
  POST_LIST_URL: `${BASE_URL}/_repots`,
  CLIENT_USE_URL: `${BASE_URL}/_repot`,
  ADMIN_USE_URL: `${BASE_URL}/repot`,
  
  ANSWER_LIST_URL: `${BASE_URL}/repot/_answers`,  
  ANSWER_INSERT_URL: `${BASE_URL}/repot/answer`,
};
