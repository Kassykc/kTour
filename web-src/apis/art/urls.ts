// api/noticeUrls.ts

// 공통된 URL 경로 변수 (필수)
const BASE_URL = apiBase.url();

// Notice 관련 API URL을 관리하기 위한 타입
export type ArtApiUrl =
  | "ARTIST_LIST"
  | "ARTIST_DETAIL"
  | "GALLERY_LIST"
  | "GALLERY_DETAIL"
  | "CODE_LIST"
  | "REG_COMMENT";

// Notice 관련 API URL 객체
export const ART_API_URLS: Record<ArtApiUrl, string> = {
  ARTIST_LIST: `${BASE_URL}/_peoples`,
  GALLERY_LIST: `${BASE_URL}/_gallerys`,
  GALLERY_DETAIL: `${BASE_URL}/_gallery/`,
  CODE_LIST: `${BASE_URL}/_codes`,
  ARTIST_DETAIL: `${BASE_URL}/_people/`,
  REG_COMMENT: `${BASE_URL}/_comment`,
};
