import axios from "axios";

const createClient = (baseURL: string) => {
  const client = axios.create({ baseURL });

  client.interceptors.request.use((config: any) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
  });

  return client;
};

const API = createClient("http://localhost:3001");

export default API;
