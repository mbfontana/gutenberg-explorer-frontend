import BooksCarousel from "../components/BooksCarousel";
import useUserSessionStore from "../stores/useUserSessionStore";

const MainPage = () => {
  const { name, viewedBooks, addViewedBook } = useUserSessionStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 to-indigo-200 flex items-start justify-start p-10">
      <div className="flex-col space-y-12 w-full h-full">
        <div>Welcome, {name} 👋</div>
        <div>book text</div>
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
