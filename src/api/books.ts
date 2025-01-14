import API from "./AuthenticatedAxios";

type Author = {
  name: string;
  birthdate: string;
  deathdate: string;
};

interface MetadataResponse {
  publisher: string;
  issuedDate: string;
  rights: string;
  title: string;
  language: string;
  author: Author;
  flag: string;
}

export const getBookById = (id: number) => {
  return API.get<string>(`/books/${id}`);
};

export const getMetadataById = (id: number) => {
  return API.get<MetadataResponse>(`/books/${id}/metadata`);
};
