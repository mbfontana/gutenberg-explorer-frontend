// store/useSessionStore.ts
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { BookResponse } from "../api/books";

interface UserSessionState {
  name: string | null;
  viewedBooks: BookResponse[];
  currentBook: BookResponse | null;
  setName: (name: string) => void;
  addViewedBook: (book: BookResponse) => void;
  setCurrentBook: (book: BookResponse) => void;
}

const useSessionStore = create<UserSessionState>()(
  persist(
    (set, get) => ({
      name: null,
      viewedBooks: [],
      currentBook: null,
      setName: (name: string) => set({ name }),
      addViewedBook: (book: BookResponse) => {
        const currentBooks = get().viewedBooks;
        const isBookAlreadyViewed = currentBooks.some(
          (currentBook) => currentBook.title === book.title
        );
        if (!isBookAlreadyViewed) {
          set({ viewedBooks: [...currentBooks, book] });
        }
      },
      setCurrentBook: (book: BookResponse) => set({ currentBook: book }),
    }),

    {
      name: "gutenberg-explorer-session-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useSessionStore;
