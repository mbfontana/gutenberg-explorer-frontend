import API from "./AuthenticatedAxios";

type Author = {
  name?: string;
  birthdate?: string;
  deathdate?: string;
};

interface MetadataResponse {
  publisher?: string;
  issuedDate?: string;
  rights?: string;
  title?: string;
  language?: string;
  author?: Author;
  flag?: string;
  cover?: string;
}

export interface BookResponse extends MetadataResponse {
  text?: string;
}

export const getBookById = (id: string) => {
  return API.get<BookResponse>(`/book/${id}`);
};

export const getTextById = (id: string) => {
  return API.get<string>(`/book/${id}/text`);
};

export const getMetadataById = (id: string) => {
  return API.get<MetadataResponse>(`/book/${id}/metadata`);
};
