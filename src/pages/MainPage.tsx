import { BookResponse } from "../api/books";
import BooksCarousel from "../components/BooksCarousel";
import ScrollableCard from "../components/ScrollableCard";
import { SearchBar } from "../components/SearchBar";
import useSessionStore from "../stores/useSessionStore";

const MainPage = () => {
  const { name, currentBook } = useSessionStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 to-indigo-200 flex items-start justify-start p-10">
      <div className="flex-col space-y-12 w-full h-full">
        <div>Welcome, {name} 👋</div>
        <div>
          <SearchBar />
        </div>
        <div>
          <ScrollableCard {...(currentBook as BookResponse)} />
        </div>
        <div>
          <div className="flex items-center justify-center">
            <BooksCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
