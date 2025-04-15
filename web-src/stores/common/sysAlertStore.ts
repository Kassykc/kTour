import { defineStore } from "pinia";

interface SysAlertState {
  show: boolean;
  message: string;
  okText: string;
  cancelText?: string;
  isHtml?: boolean;
  callback?: () => void;
}

export const useSysAlertStore = defineStore("sysAlert", {
  state: (): SysAlertState => ({
    show: false,
    message: "",
    okText: "확인",
    cancelText: "취소",
    isHtml: false,
    callback: undefined,
  }),
  actions: {
    showAlert({
      message,
      okText = "확인",
      cancelText = "취소",
      isHtml = false,
      callback,
    }: Omit<SysAlertState, "show">) {
      this.show = true;
      this.message = message;
      this.okText = okText;
      this.cancelText = cancelText;
      this.isHtml = isHtml;
      this.callback = callback;
    },
    hideAlert() {
      this.show = false;
      this.message = "";
      this.okText = "확인";
      this.cancelText = "취소";
      this.isHtml = false;
      this.callback = undefined;
    },
  },
});
