export const apiResponse = ref<any | null>(null);
export const errorMessage = ref<string | null>(null);

export const handleResponse = (response: any) => {
  if (response && response.data) {
    apiResponse.value = response.data;
    console.log("Updated apiResponse");
  } else if (response.error) {
    errorMessage.value = response.error;
    console.log("Error occurred:", response.error);
  } else {
    errorMessage.value = "No response received.";
    console.log("No response received.");
  }
};
