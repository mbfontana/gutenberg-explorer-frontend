// store/useSessionStore.ts
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { MetadataResponse } from "../api/books";

interface UserSessionState {
  name: string | null;
  viewedBooks: MetadataResponse[];
  currentBook: MetadataResponse | null;
  setName: (name: string) => void;
  addViewedBook: (book: MetadataResponse) => void;
  setCurrentBook: (book: MetadataResponse) => void;
  clearSession: () => void;
}

const useSessionStore = create<UserSessionState>()(
  persist(
    (set, get) => ({
      name: null,
      viewedBooks: [],
      currentBook: null,
      setName: (name: string) => set({ name }),
      addViewedBook: (book: MetadataResponse) => {
        const currentBooks = get().viewedBooks;
        const isBookAlreadyViewed = currentBooks.some(
          (currentBook) => currentBook.title === book.title
        );
        if (!isBookAlreadyViewed) {
          set({ viewedBooks: [...currentBooks, book] });
        }
      },
      setCurrentBook: (book: MetadataResponse) => set({ currentBook: book }),
      clearSession: () =>
        set({ name: null, viewedBooks: [], currentBook: null }),
    }),

    {
      name: "gutenberg-explorer-session-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useSessionStore;
