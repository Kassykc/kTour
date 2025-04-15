export const useErrorStore = defineStore("error", () => {
  const errorMessage = ref<string | null>(null);

  const setError = (message: string | null) => {
    errorMessage.value = message;
  };

  return {
    errorMessage,
    setError,
  };
});
