import { useSysAlertStore } from "@/stores/common/sysAlertStore";

type NotifyOption = {
  type: "confirm" | "alert";
  message: string;
  callback?: () => void;
  okText?: string;
  cancelText?: string;
  isHtml?: boolean;
  useAos?: boolean; // 안드로이드에서 알러트를 사용할지 여부
};

export const SysAlert = async (option: NotifyOption): Promise<void> => {
  const { type, message, callback, okText, cancelText, isHtml, useAos } =
    option;
  const sysAlertStore = useSysAlertStore();
  const os = common.getOS();

  if (os == "100") {
    // 안드로이드: useAos 옵션에 따라 알러트 또는 토스트 표시
    if (useAos) {
      const resolvedOkText = okText || "OK";
      const resolvedCancelText =
        cancelText || (type === "confirm" ? "Cancel" : "");

      if (type === "alert") {
        sysAlertStore.showAlert({
          message,
          okText: resolvedOkText,
          cancelText: "", // cancel 버튼 없음
          isHtml: isHtml,
          callback,
        });
      }

      if (type === "confirm") {
        sysAlertStore.showAlert({
          message,
          okText: resolvedOkText,
          cancelText: resolvedCancelText,
          isHtml: isHtml,
          callback,
        });
      }
    } else {
      native.toast(message); // 기본 동작: 토스트 표시
    }
  }

  if (os == "300" || os == "200") {
    const resolvedOkText = okText || "OK";
    const resolvedCancelText =
      cancelText || (type === "confirm" ? "Cancel" : "");

    // alert일 경우
    if (type === "alert") {
      sysAlertStore.showAlert({
        message,
        okText: resolvedOkText,
        cancelText: "", // cancel 버튼 없음
        isHtml: isHtml,
        callback,
      });
    }

    // confirm일 경우
    if (type === "confirm") {
      sysAlertStore.showAlert({
        message,
        okText: resolvedOkText,
        cancelText: resolvedCancelText,
        isHtml: isHtml,
        callback,
      });
    }
  }
};
