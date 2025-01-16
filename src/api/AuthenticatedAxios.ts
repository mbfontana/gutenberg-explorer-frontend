import axios from "axios";

const createClient = (baseURL: string) => {
  const client = axios.create({ baseURL });

  client.interceptors.request.use((config: any) => {
    config.headers.Authorization =
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJQcm9qZWN0IEd1dGVuYmVyZyBFeHBsb3JlciIsImlhdCI6MTczNzAzNTc4NSwiZXhwIjoxNzY4NTcxNzg1LCJhdWQiOiJsb2NhbGhvc3QuY29tIiwic3ViIjoiam9obmRvZUBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJEb2UiLCJFbWFpbCI6ImpvaG5kb2VAZXhhbXBsZS5jb20iLCJSb2xlIjoiVXNlciJ9.6G8-zRCzheoIDLWnT8fph7FxQNQIhva3dPNwVoPmhwM";
    return config;
  });

  return client;
};

const API = createClient("https://gutenberg-explorer-backend.onrender.com");

export default API;
