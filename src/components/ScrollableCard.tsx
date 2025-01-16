import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "./ui/dialog";
import { BookResponse } from "../api/books";
import { getCompletion } from "../api/llms";
import useSessionStore from "../stores/useSessionStore";
import BookDetails from "./BookDetails";
import ErrorMessage from "./ErrorMessage";
import Spinner from "./Spinner";
import { Card, CardContent } from "./ui/card";
import ReactMarkdown from "react-markdown";

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

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogResponse, setDialogResponse] = useState<string | null>(null);
  const [isDialogLoading, setIsDialogLoading] = useState(false);

  const handleActionClick = async (action: string) => {
    try {
      setDialogOpen(true);
      setIsDialogLoading(true);
      const response = await getCompletion(action, currentBook!.id as string);
      setDialogResponse(response.data);
    } catch (error) {
      console.error("Error fetching completion:", error);
      setDialogResponse("An error occurred while fetching the response.");
      setDialogOpen(true);
    } finally {
      setIsDialogLoading(false);
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
        <ReactMarkdown className="prose mt-4">{text || ""}</ReactMarkdown>
      </CardContent>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-h-[80vh] max-w-[50vw] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>AI Text Analysis</DialogTitle>
          </DialogHeader>
          {isDialogLoading ? (
            <div className="mt-12">
              <Spinner />
            </div>
          ) : (
            <Card className="w-full bg-white p-4">
              <CardContent
                className="overflow-y-auto leading-relaxed"
                style={{ maxHeight: "600px" }}
              >
                <ReactMarkdown className="prose">
                  {dialogResponse || ""}
                </ReactMarkdown>
              </CardContent>
            </Card>
          )}
          <DialogFooter>
            <button
              className="px-4 py-2 bg-black text-white rounded hover:bg-blue-600"
              onClick={() => setDialogOpen(false)}
            >
              Close
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default ScrollableCard;
