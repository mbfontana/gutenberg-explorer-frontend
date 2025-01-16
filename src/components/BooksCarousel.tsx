import { BookResponse } from "../api/books";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import useSessionStore from "../stores/useSessionStore";

const BooksCarousel = () => {
  const { setCurrentBook, viewedBooks } = useSessionStore();

  const handleClick = (book: BookResponse) => {
    setCurrentBook(book);
  };

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent>
        {viewedBooks.map((book, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/5 hover:cursor-pointer"
            onClick={() => handleClick(book)}
          >
            <div className="h-full">
              <img
                src={book.cover}
                alt={`Book Cover: ${book.title}`}
                loading="lazy"
                className="h-full"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default BooksCarousel;
