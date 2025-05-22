// plugins/i18n.ts
import { createI18n } from "vue-i18n";
import type { I18n, Composer } from "vue-i18n"; // 타입 전용 import

// common 모듈 가져오기
import common from "@/utils/common"; // 기존 모듈 사용

// 비동기 함수로 메시지 가져오기
async function loadMessages() {
  const messages = {
    ko: await import("@/locales/ko.json"),
    en: await import("@/locales/en.json"),
    id: await import("@/locales/id.json"),
  };
  return messages;
}

// i18n 인스턴스 정의
let i18n: I18n; // i18n의 타입을 I18n으로 설정
let composer: Composer; // t 함수 및 기타 설정에 접근하기 위한 Composer

export default defineNuxtPlugin(async (nuxtApp) => {
  const messages = await loadMessages(); // 메시지 로드

  i18n = createI18n({
    locale: "en", // 기본 언어 설정
    fallbackLocale: "en",
    messages,
  });

  // i18n의 locale을 변경하기 위해 setup을 활용하는 방식
  const initialLang = common.getLang(); // 쿠키 또는 브라우저 언어를 기준으로 설정

  // 초기 언어가 지정된 경우에만 변경
  if (initialLang === "en" || initialLang === "id") {
    i18n.global.locale = initialLang;
  } else {
    console.warn('Invalid language setting, defaulting to "en".');
    i18n.global.locale = "en"; // 유효하지 않은 언어인 경우 기본값으로 설정
  }

  // `composer`를 통해 `t` 함수 사용 가능하도록 설정
  composer = i18n.global;

  nuxtApp.vueApp.use(i18n); // i18n 사용
});

// 헬퍼 함수들 추가

/**
 * 다국어 메시지를 가져오는 헬퍼 함수
 * @param key - i18n 키
 * @param args - 메시지 동적 인수
 * @returns {string} - 번역된 메시지
 */
export function t(key: string, args?: Record<string, unknown>): string {
  return composer.t(key, args);
}

/**
 * 현재 활성화된 언어 반환
 * @returns {string} - 현재 언어
 */
export function getCurrentLocale(): string {
  return composer.locale.value
    ? composer.locale.value
    : common.getCookie("lang")
    ? common.getCookie("lang")
    : "id";
}

/**
 * 언어 변경 메서드
 * @param locale - 변경할 언어 코드
 */
export function setLocale(locale: string): void {
  if (["en", "id", "ko"].includes(locale)) {
    console.log(locale);
    common.setLang(locale);
    composer.locale = locale;
  } else {
    console.warn(`Invalid locale: ${locale}`);
  }
}

/**
 * 동적으로 메시지 추가
 * @param locale - 메시지를 추가할 언어 코드
 * @param newMessages - 추가할 메시지 객체
 */
export function addMessages(
  locale: string,
  newMessages: Record<string, string>
): void {
  const existingMessages = composer.getLocaleMessage(locale);
  composer.setLocaleMessage(locale, { ...existingMessages, ...newMessages });
}

export { composer };
