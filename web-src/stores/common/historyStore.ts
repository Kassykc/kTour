export const useHistoryStore = defineStore("historyStore", {
  state: () => ({
    historyData: [],
  }),

  actions: {
    saveHistory(data: any) {
      this.historyData.push(data);
      sessionStorage.setItem("historyData", JSON.stringify(this.historyData));
    },
    gobackProcess() {
      if (this.historyData && this.historyData.length > 0) {
        this.historyData.pop();
        sessionStorage.setItem(
          "backupData",
          JSON.stringify(this.historyData[this.historyData.length - 1])
        );
      }
      this.historyData.pop();
      sessionStorage.setItem("historyData", JSON.stringify(this.historyData));
    },
  },
});
