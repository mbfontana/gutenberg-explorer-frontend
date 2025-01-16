import API from "./AuthenticatedAxios";

export const getCompletion = (action: string, bookId: string) => {
  return API.post<string>("/llm/completion", { action, id: bookId });
};
