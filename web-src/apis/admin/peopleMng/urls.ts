// 공통된 URL 경로 변수 (필수)
const BASE_URL = apiBase.url();

// Display 관련 URL 경로
// const DISPLAY_PATH = `${BASE_URL}/display`;

// Display 관련 API URL 객체
export const PROFILEMNG_API_URLS: Record<string, string> = {
  POST_LIST_URL: `${BASE_URL}/user/infos`,
  SET_USER_URL: `${BASE_URL}/user`,
  SET_PEOPLE_URL: `${BASE_URL}/people`,
  SET_PEOPLE_URL2: `${BASE_URL}/_people`,
};
