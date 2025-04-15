export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    const script = document.createElement("script");
    // script.src = "https://js.xendit.co/v1/xendit.min.js";

    script.onload = () => {
      // Xendit SDK가 로드된 후, window.Xendit을 호출해서 객체를 얻음
      if (typeof window.Xendit === "function") {
        // Xendit 객체를 함수로 호출하여 초기화
        const xendit = window.Xendit;

        // console.log("Xendit 객체 초기화 완료:", xendit);

        // Publishable Key 설정
        xendit.setPublishableKey(
          "xnd_public_production_q7bJLaP9HRj29dCSoswrbiXgZZzkNrppv2q0axVTay834x400xI0WIG1F1PgU3"
        );
        // console.log("Publishable Key 설정 완료");

        // Nuxt에 Xendit 객체 제공
        useNuxtApp().provide("xendit", xendit);
      } else {
        // console.error("Xendit SDK 로드 실패: window.Xendit is not a function");
      }
    };

    script.onerror = (error) => {
      // console.error("Xendit SDK 로드 중 오류 발생:", error);
    };

    document.body.appendChild(script);
  }
});
