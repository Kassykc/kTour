interface SpinnerState {
  isShow: boolean;
}

export const useSpinnerStore = defineStore("spinner", {
  state: (): SpinnerState => ({
    isShow: false,
  }),
  actions: {
    showSpinner() {
      this.isShow = true;
    },
    hideSpinner() {
      this.isShow = false;
    },
  },
});
