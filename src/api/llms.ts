import API from "./AuthenticatedAxios";

export const getCompletion = (prompt: string, stream: boolean = false) => {
  return API.post<string>("/llm/completion", { prompt, stream });
};
