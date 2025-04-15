// composables/useGuide.ts
import { ref } from "vue";

interface GuideItem {
  id: number;
  props: any;
}

const guides = ref<GuideItem[]>([]);

export const useGuide = () => {
  const openGuide = (props: Record<string, any> = {}) => {
    guides.value.push({ props, id: Date.now() });
  };

  const closeGuide = (id: number) => {
    guides.value = guides.value.filter((popup) => popup.id !== id);
    localStorage.setItem("guideYn", "N");
    localStorage.setItem("guideFin", "Y");
  };

  return {
    guides,
    openGuide,
    closeGuide,
  };
};
