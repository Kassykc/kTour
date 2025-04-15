import Common from "../utils/common";
const { isAndroid } = Common;

// Android 인터페이스 정의
interface AndroidInterface {
  toast: (message: string) => void;
  clipboard: (text: string) => void;
  share: (url: string) => void;
  download: (url: string, filename: string) => void;
  play: (url: string) => void;
  buy: (key: string) => void;
  verifyReceiptCallback: (response: string) => void;
  subscribeTopic: (topic: string) => void;
}

// iOS 인터페이스 정의
interface IOSMessageHandlers {
  clipboard: { postMessage: (text: string) => void };
  share: { postMessage: (url: string) => void };
  play: { postMessage: (url: string) => void };
  buy: { postMessage: (key: string) => void };
  verifyReceiptCallback: { postMessage: (response: string) => void };
  subscribeTopic: { postMessage: (topic: string) => void };
}

// 전역 객체에 Android 및 iOS 객체 추가
declare global {
  interface Window {
    kmediapp?: AndroidInterface;
    webkit?: {
      messageHandlers?: IOSMessageHandlers;
    };
    KMEDI_fnGoogleBillingDeviceError?: () => void;
  }
}

// 모듈 정의
export default {
  toast(message: string): void {
    console.log("native toast call: ", message);
    if (isAndroid()) {
      window.kmediapp?.toast(message);
    } else {
      // iOS 관련 추가 코드가 필요할 경우 여기에 추가합니다.
    }
  },
  clipboard(text: string): void {
    console.log("native clipboard call: ", text);
    if (isAndroid()) {
      window.kmediapp?.clipboard(text);
    } else {
      try {
        window.webkit?.messageHandlers?.clipboard.postMessage(text);
      } catch (e) {
        window.kmediapp?.clipboard(text);
      }
    }
  },
  share(url: string): void {
    console.log("native share call: ", url);
    if (isAndroid()) {
      window.kmediapp?.share(url);
    } else {
      try {
        window.webkit?.messageHandlers?.share.postMessage(url);
      } catch (e) {
        window.kmediapp?.share(url);
      }
    }
  },
  download(url: string, filename: string): void {
    console.log("native download call: ", url, filename);
    if (isAndroid()) {
      window.kmediapp?.download(url, filename);
    } else {
      // iOS 관련 추가 코드가 필요할 경우 여기에 추가합니다.
    }
  },
  play(url: string): void {
    console.log("native call play", url);
    if (isAndroid()) {
      window.kmediapp?.play(url);
    } else {
      try {
        window.webkit?.messageHandlers?.play.postMessage(url);
      } catch (e) {
        window.kmediapp?.play(url);
      }
    }
  },
  buy(key: string): void {
    console.log("native call buy", key);
    if (isAndroid()) {
      window.kmediapp?.buy?.(key);
    } else {
      if (window.webkit?.messageHandlers?.buy) {
        window.webkit.messageHandlers.buy.postMessage(key);
      } else {
        window.kmediapp?.buy?.(key) ??
          window.KMEDI_fnGoogleBillingDeviceError?.();
      }
    }
  },
  isIOS() {
    if (window.webkit?.messageHandlers?.buy) {
      return true;
    } else {
      return false;
    }
  },
  verifyReceiptCallback(response: string): void {
    console.log("verifyReceiptCallback", response);
    if (isAndroid()) {
      window.kmediapp?.verifyReceiptCallback(response);
    } else {
      try {
        window.webkit?.messageHandlers?.verifyReceiptCallback.postMessage(
          response
        );
      } catch (e) {
        window.kmediapp?.verifyReceiptCallback(response);
      }
    }
  },
  subscribeTopic(topic: string): void {
    console.log("subscribeTopic", topic);
    if (isAndroid()) {
      window.kmediapp?.subscribeTopic(topic);
    } else {
      try {
        window.webkit?.messageHandlers?.subscribeTopic.postMessage(topic);
      } catch (e) {
        window.kmediapp?.subscribeTopic(topic);
      }
    }
  },
};
