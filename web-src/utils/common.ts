// utils/common.ts
import { COUNTRY_CODE } from "@/composables/common/useLocale";
import { useAuthStore } from "@/stores/login/auth"; // Pinia auth store

const common = {
  isLogin() {
    const authStore = useAuthStore();
    return authStore.token !== null; // Pinia를 통해 토큰 확인
  },
  getId() {
    const authStore = useAuthStore();
    return authStore.id; // Pinia를 통해 사용자 ID 확인
  },
  getLang() {
    // 첫 앱화면 진입 시 기기 언어에 따라 초기 설정
    const cookieLang: "en" | "id" | undefined | null | string =
      this.getCookie("lang"); // 쿠키에서 언어 가져오기
    if (!cookieLang) {
      // 쿠키가 없으면 브라우저에서 언어 가져오기
      let language: "en" | "id" | undefined | null | string =
        typeof navigator !== "undefined" ? navigator.language : "en"; // SSR에서 navigator가 undefined일 수 있음
      // console.log("language : ", language);
      if (language !== "en" && language !== "id") {
        // 영어 또는 인도네시아어에 해당하지 않는 언어인 경우 기본값 영문으로 세팅
        language = "en";
      }
      this.setLang(language);
      return language; // 새로 설정한 언어 반환
    }
    return cookieLang; // 쿠키가 있을 경우 해당 언어 반환
  },
  setLang(lang: string) {
    if (typeof window !== "undefined") {
      common.setCookie("lang", lang);
    }
  },
  removeCountryCode(phone: string) {
    return phone.replace(COUNTRY_CODE, "");
  },
  getOS() {
    const headers = useRequestHeaders(["user-agent"]);
    const userAgent = ref(headers["user-agent"] || "");

    const isIOS =
      window.webkit &&
      window.webkit.messageHandlers &&
      window.webkit.messageHandlers.buy;
    const isAndroid = window.navigator.userAgent.includes("KMEDI_ANDROID");
    const isWebView = /wv|WebView/i.test(userAgent.value); // 웹뷰인 경우

    let code = "";

    if (isAndroid) {
      code = "100"; // AOS 앱
    } else if (isIOS) {
      code = "200"; // iOS 앱
    } else {
      code = "300"; // 모바일 웹, PC 브라우저
    }

    common.setCookie("os", code);
    return code;
  },
  getFcmToken() {
    return localStorage.getItem("fcm_token"); // 쿠키에서 가져오기
  },
  getVersion() {
    return this.getCookie("version"); // 쿠키에서 가져오기
  },
  isAndroid() {
    return (
      typeof window !== "undefined" &&
      window.navigator.userAgent.includes("KMEDI_ANDROID")
    );
  },
  getCookie(name: string): string | null {
    // 쿠키를 가져오는 함수 (SSR 환경에서도 사용 가능)

    if (import.meta.client) {
      // SSR 환경에서는 h3를 통해 쿠키 접근
      const cookie = useCookie(name).value;
      return cookie ?? null; // undefined인 경우 null 반환
    } else if (typeof document !== "undefined") {
      // 클라이언트에서는 document를 통해 쿠키 접근
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) {
        return parts.pop()?.split(";").shift() ?? null; // undefined인 경우 null 반환
      }
    }

    return null; // 쿠키가 없을 경우 null 반환
  },

  setCookie(
    name: string,
    value: any,
    days: number = 7,
    path: string = "/",
    secure: boolean = false,
    sameSite: "Strict" | "Lax" | "None" = "Lax"
  ) {
    // 만료일 계산
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000); // days 만큼 밀리초 추가
    const expiresString = `expires=${expires.toUTCString()}`;

    // Secure 속성 추가
    const secureString = secure ? "Secure" : "";

    // 쿠키 설정
    const cookieString =
      `${name}=${value}; ${expiresString}; path=${path}; SameSite=${sameSite}` +
      (secure ? `; ${secureString}` : "");

    // 클라이언트에서 쿠키 설정
    if (typeof document !== "undefined") {
      document.cookie = cookieString;
    }
  },

  deleteCookie(
    name: string,
    path: string = "/",
    secure: boolean = false,
    sameSite: "Strict" | "Lax" | "None" = "Lax"
  ) {
    // 유효기간을 과거로 설정
    const expiresString = `expires=Thu, 01 Jan 1970 00:00:00 UTC`;

    // Secure 속성 추가
    const secureString = secure ? "Secure" : "";

    // 쿠키 삭제를 위한 설정
    const cookieString =
      `${name}=; ${expiresString}; path=${path}; SameSite=${sameSite}` +
      (secure ? `; ${secureString}` : "");

    // 클라이언트에서 쿠키 삭제
    if (typeof document !== "undefined") {
      document.cookie = cookieString;
    }
  },

  getSid() {
    let sid;
    if (sessionStorage.getItem("sid") != null) {
      sid = sessionStorage.getItem("sid");
    } else {
      sid =
        "session " + Date.now() + "-" + Math.random().toString(36).substr(2, 9);
      sessionStorage.setItem("sid", sid);
    }
    return sid;
  },

  getTid() {
    let tid;
    if (localStorage.getItem("tid") != null) {
      tid = localStorage.getItem("tid");
    } else {
      tid =
        "trace " + Date.now() + "-" + Math.random().toString(36).substr(2, 9);
      localStorage.setItem("tid", tid);
    }
    return tid;
  },

  formatDate(dateString: string): string {
    const date = new Date(dateString);

    // 연도, 월, 일 추출
    const year = date.getFullYear().toString().slice(-2); // 마지막 두 자리만 추출
    const month = String(date.getMonth() + 1).padStart(2, "0"); // 월을 2자리로 맞추기
    const day = String(date.getDate()).padStart(2, "0"); // 일을 2자리로 맞추기

    return `${year}.${month}.${day}`;
  },

  addCommasToInteger(number: any, unit?: any) {
    // 숫자를 문자열로 변환
    let numStr = parseInt(number).toString();

    // 정수 부분에 콤마 추가
    let result = "";
    let count = 0;
    for (let i = numStr.length - 1; i >= 0; i--) {
      result = numStr[i] + result;
      count++;
      if (count % 3 === 0 && i !== 0) {
        result = "," + result;
      }
    }

    return unit ? `${unit} ${result}` : result;
  },

  DDMMYYYY(date: string, divider = "/"): string | undefined {
    if (!date) return;
    const d = new Date(date);

    const result = new Intl.DateTimeFormat("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    }).format(d);

    const [mm, dd, yyyy] = result.split("/");

    return `${dd}${divider}${mm}${divider}${yyyy}`;
  },

  msToMMSS(ms: any) {
    if (!ms) return;
    let seconds = Math.floor(ms / 1000);
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  },

  formatDateYtoS(data: any) {
    // 날짜와 시간을 분리
    const [date, time] = data.split(" ");

    // 날짜 부분을 다시 연, 월, 일로 분리
    const [year, month, day] = date.split("-");

    // 형식을 "일.월.년 시:분:초"로 변환
    return `${day}.${month}.${year} ${time}`;
  },

  formatDateTime(input: string) {
    const [datePart, timePart] = input.split(" ");
    const [year, month, day] = datePart.split("-");

    const dateString = `${year}-${month}-${day}T${timePart}Z`;

    const dateObj = new Date(dateString);

    if (isNaN(dateObj.getTime())) {
      throw new Error("Invalid date format");
    }

    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const dateOptions = {
      timeZone: userTimezone,
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };

    const timeOptions = {
      timeZone: userTimezone,
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };

    const formattedDate = new Intl.DateTimeFormat("en-GB", dateOptions).format(
      dateObj
    );
    const formattedTime = new Intl.DateTimeFormat("en-GB", timeOptions).format(
      dateObj
    );
    const formattedDateWithDot = formattedDate.replace(/\//g, ".");

    return `${formattedDateWithDot} ${formattedTime}`;
  },

  snakeToCamel(str) {
    return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
  },

  convertKeysToCamel(obj) {
    if (Array.isArray(obj)) {
      return obj.map((item) => common.convertKeysToCamel(item));
    } else if (obj !== null && typeof obj === "object") {
      return Object.entries(obj).reduce((acc, [key, value]) => {
        const camelKey = common.snakeToCamel(key);
        acc[camelKey] = common.convertKeysToCamel(value); // 내부 객체 및 배열도 변환
        return acc;
      }, {});
    }
    return obj; // 원시값(문자열, 숫자, 불리언 등)은 그대로 유지
  },
};

export default common; // default export 추가
