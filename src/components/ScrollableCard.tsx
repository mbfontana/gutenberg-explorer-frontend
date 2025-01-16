import { BookResponse } from "../api/books";
import { getCompletion } from "../api/llms";
import useSessionStore from "../stores/useSessionStore";
import BookDetails from "./BookDetails";
import ErrorMessage from "./ErrorMessage";
import Spinner from "./Spinner";
import { Card, CardContent } from "./ui/card";

export type ScrollableCardProps = BookResponse & {
  isLoading?: boolean;
  error?: boolean;
};

const ScrollableCard = ({
  text,
  isLoading = false,
  error = false,
  ...details
}: ScrollableCardProps) => {
  const { currentBook } = useSessionStore();

  const handleActionClick = async (action: string) => {
    try {
      console.log(currentBook!.id);
      const response = await getCompletion(action, currentBook!.id as string);
      console.log("Completion response:", response);
    } catch (error) {
      console.error("Error fetching completion:", error);
    }
  };

  if (error) {
    return (
      <Card className="w-full bg-white shadow-lg rounded-lg border border-gray-200 p-4">
        <ErrorMessage message="Sorry, book was not found :(" />
      </Card>
    );
  }

  if (isLoading) {
    return (
      <Card className="w-full bg-white shadow-lg rounded-lg border border-gray-200 p-4">
        <div style={{ height: "800px" }}>
          <Spinner />
        </div>
      </Card>
    );
  }

  return (
    <Card className="w-full bg-white shadow-lg rounded-lg border border-gray-200 p-4">
      <BookDetails {...details} handleActionClick={handleActionClick} />
      <CardContent
        style={{ height: "750px" }}
        className="overflow-y-auto bg-gray-50 text-gray-700 leading-relaxed"
      >
        <p className="mt-4">{text}</p>
      </CardContent>
    </Card>
  );
};

export default ScrollableCard;
