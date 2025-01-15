// store/useSessionStore.ts
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserSessionState {
  name: string | null;
  viewedBooks: string[];
  setName: (name: string) => void;
  addViewedBook: (bookId: string) => void;
}

const useUserSessionStore = create<UserSessionState>()(
  persist(
    (set, get) => ({
      name: null,
      viewedBooks: [],
      setName: (name: string) => set({ name }),
      addViewedBook: (bookId: string) => {
        const currentBooks = get().viewedBooks;
        if (!currentBooks.includes(bookId)) {
          set({ viewedBooks: [...currentBooks, bookId] });
        }
      },
    }),

    {
      name: "gutenberg-explorer-session-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUserSessionStore;
