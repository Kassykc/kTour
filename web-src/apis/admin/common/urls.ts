// api/displayUrls.ts

// 공통된 URL 경로 변수 (필수)
const BASE_URL = apiBase.url();

// Display 관련 URL 경로
// const DISPLAY_PATH = `${BASE_URL}/display`;

// Display 관련 API URL 객체
export const COMMON_API_URLS: Record<string, string> = {
  FILE_URL: `${BASE_URL}/_file/`,
  MENU_URL: `${BASE_URL}/menus`,
  LOGIN_URL: `${BASE_URL}/signin`,
  LOGOUT_URL: `${BASE_URL}/signout`,
  CODE_URL: `${BASE_URL}/_codes`,
};
