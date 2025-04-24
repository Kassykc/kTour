import { createFormData } from "@/composables/common/createFormData";
const apiRequest = {
  async set(
    url: string,
    key: string | "",
    method: string,
    isForm: boolean,
    isAuth: boolean,
    params: any
  ) {
    console.log("key : " + key);
    console.log("isServer : " + import.meta.server);
    
    const token = common.getCookie('medicalToken');
    const createHeaders = async () => {
      let headers: Record<string, string> = {
        "Accept-Language": common.getLang(),
        Sid: common.getSid() ?? "",
        Tid: common.getTid() ?? "",
      };

      if (isAuth) {
        if (token && token != "") {
          headers["Authorization"] = `Bearer ${token}`;
        }
      }

      return headers;
    };

    const data: any = isForm != true ? params : createFormData(params);

    const headers = await createHeaders();

    const fetchOptions: any = {
      method: method.toUpperCase(),
      headers: headers,
    };

    if (data instanceof FormData) {
      fetchOptions.body = data;
    } else if (data) {
      fetchOptions.body = JSON.stringify(data);
      headers["Content-Type"] = "application/json";
    } else {
      headers["Content-Type"] = "application/json";
    }

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      throw new Error(`Failed to fetch ${key} data`);
    }

    const reader = response.body.getReader();
    let result = "";
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      result += new TextDecoder().decode(value);
    }
    return JSON.parse(result);
  },
};

export default apiRequest;
