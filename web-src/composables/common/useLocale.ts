// 국가 코드 및 기본 언어를 정의하는 상수
export const COUNTRY_CODE: string = "+62"; // 인도네시아 국가 코드
export const DEFAULT_LANG: string = "en"; // 기본 언어 (영어)

export const SUPPORTED_LANGUAGES: string[] = ["en", "id"];

// 기본 언어를 선택하는 함수 (필요에 따라 사용자 정의)
export function getDefaultLang(): string {
  return DEFAULT_LANG;
}
