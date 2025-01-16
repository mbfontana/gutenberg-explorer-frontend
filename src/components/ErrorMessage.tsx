import { TriangleAlert } from "lucide-react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div
      className="flex items-center justify-center space-x-2"
      style={{ height: "800px" }}
    >
      <TriangleAlert />
      <span>{message}</span>
    </div>
  );
};

export default ErrorMessage;
