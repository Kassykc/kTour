import { useSpinnerStore } from "@/stores/common/spinnerStore";

export const toggleSpinner = async (show: boolean) => {
  const spinnerStore = useSpinnerStore();

  if (show) {
    spinnerStore.showSpinner();
  } else {
    spinnerStore.hideSpinner();
  }
};
