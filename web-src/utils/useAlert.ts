// utils/useAlert.ts
import { ref } from "vue";

type AlertButton = {
  text: string;
  click: () => void;
};

type AlertOptions = {
  id: symbol;
  show: boolean;
  message: string;
  buttons: {
    ok: AlertButton;
    close: AlertButton;
    cancel?: AlertButton;
  };
};

// Vue 상태 관리
const alertList = ref<AlertOptions[]>([]);

const hideAlert = (id: symbol) => {
  alertList.value = alertList.value.filter((alert) => alert.id !== id);
};

export const useAlert = () => {
  const alert = ({
    message,
    buttons,
  }: {
    message: string;
    buttons: { ok: string; cancel?: string };
  }): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      const id = Symbol();

      alertList.value.push({
        id,
        show: true,
        message,
        buttons: {
          ok: {
            text: buttons.ok,
            click: () => resolve(id),
          },
          close: {
            text: "닫기",
            click: () => hideAlert(id),
          },
          ...(buttons.cancel && {
            cancel: {
              text: buttons.cancel,
              click: () => reject(id),
            },
          }),
        },
      });
    })
      .then((id) => {
        hideAlert(id as symbol);
        return true;
      })
      .catch((id) => {
        hideAlert(id as symbol);
        return false;
      });
  };

  return {
    alert,
    alertList,
  };
};

// CommonNotify에서 사용할 hook 반환
export const useAlertHook = () => {
  const { alert } = useAlert();

  return alert;
};
