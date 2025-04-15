// utils/useConfirm.ts
import { ref } from "vue";

type ConfirmButton = {
  text: string;
  click: () => void;
};

type ConfirmOptions = {
  id: symbol;
  show: boolean;
  message: string;
  buttons: {
    ok: ConfirmButton;
    close: ConfirmButton;
    cancel?: ConfirmButton;
  };
};

// Vue 상태 관리
const confirmList = ref<ConfirmOptions[]>([]);

const hideConfirm = (id: symbol) => {
  confirmList.value = confirmList.value.filter((confirm) => confirm.id !== id);
};

export const useConfirm = () => {
  const confirm = ({
    message,
    buttons,
  }: {
    message: string;
    buttons: { ok: string; cancel?: string };
  }): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      const id = Symbol();

      confirmList.value.push({
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
            click: () => hideConfirm(id),
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
        hideConfirm(id as symbol);
        return true;
      })
      .catch((id) => {
        hideConfirm(id as symbol);
        return false;
      });
  };

  return {
    confirm,
    confirmList,
  };
};

// CommonNotify에서 사용할 hook 반환
export const useConfirmHook = () => {
  const { confirm } = useConfirm();

  return confirm;
};
