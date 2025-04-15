// composables/usePopup.ts
import { ref } from "vue";

interface PopupItem {
  id: number;
  component: any;
  props: any;
}

const popups = ref<PopupItem[]>([]);

export const usePopup = () => {
  const openPopup = (component: any, props: Record<string, any> = {}) => {
    popups.value.push({ component, props, id: Date.now() });
  };

  const closePopup = (id: number) => {
    popups.value = popups.value.filter((popup) => popup.id !== id);
  };

  return {
    popups,
    openPopup,
    closePopup,
  };
};
