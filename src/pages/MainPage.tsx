import { LogOut } from "lucide-react";
import { BookResponse } from "../api/books";
import BooksCarousel from "../components/BooksCarousel";
import ScrollableCard from "../components/ScrollableCard";
import SearchBar from "../components/SearchBar";
import useSessionStore from "../stores/useSessionStore";
import { Button } from "../components/ui/button";

const MainPage = () => {
  const { name, currentBook, viewedBooks, clearSession } = useSessionStore();

  const handleLogout = () => {
    clearSession();
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 to-indigo-200 flex items-start justify-start p-10">
      <div className="flex-col space-y-12 w-full h-full">
        <div className="flex items-center justify-start space-x-4">
          <Button onClick={handleLogout} size="icon" className="w-6 h-6">
            <LogOut className="h-3 w-3" />
            <span className="sr-only">Search</span>
          </Button>
          <div>Welcome, {name} 👋</div>
        </div>
        <div>
          <SearchBar />
        </div>
        <div>
          {currentBook && <ScrollableCard {...(currentBook as BookResponse)} />}
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
