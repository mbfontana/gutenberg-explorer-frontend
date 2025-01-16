import { LogOut } from "lucide-react";
import { BookResponse, getBookById } from "../api/books";
import BooksCarousel from "../components/BooksCarousel";
import ScrollableCard from "../components/ScrollableCard";
import SearchBar from "../components/SearchBar";
import useSessionStore from "../stores/useSessionStore";
import { Button } from "../components/ui/button";
import { useState } from "react";

const MainPage = () => {
  const {
    name,
    currentBook,
    viewedBooks,
    setCurrentBook,
    addViewedBook,
    clearSession,
  } = useSessionStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleLogout = () => {
    clearSession();
    window.location.href = "/";
  };

  const handleSearch = async (e: React.FormEvent, searchQuery: string) => {
    e.preventDefault();

    try {
      setError(false);
      setIsLoading(true);
      const response = await getBookById(searchQuery);
      const book = response.data;
      setCurrentBook(book);
      addViewedBook(book);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 to-indigo-200 flex items-start justify-start p-10">
      <div className="flex-col space-y-12 w-full h-full">
        <div className="flex items-center justify-start space-x-4">
          <Button onClick={handleLogout} size="icon" className="w-6 h-6">
            <LogOut className="h-3 w-3" />
            <span className="sr-only">Logout</span>
          </Button>
          <div>Welcome, {name} 👋</div>
        </div>
        <div>
          <SearchBar handleSearch={handleSearch} />
        </div>
        <div>
          {currentBook && (
            <ScrollableCard
              {...(currentBook as BookResponse)}
              isLoading={isLoading}
              error={error}
            />
          )}
        </div>
        <div>
          {viewedBooks.length > 0 && (
            <div className="flex items-center justify-center">
              <BooksCarousel />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
