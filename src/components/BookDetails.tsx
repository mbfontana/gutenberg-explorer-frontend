import { ScrollableCardProps } from "./ScrollableCard";
import { Button } from "./ui/button";
import { CardHeader, CardTitle } from "./ui/card";

type BookDetailsProps = Omit<ScrollableCardProps, "isLoading" | "error"> & {
  handleActionClick: (action: string) => void;
};

const actions = [
  { displayName: "KEY WORDS", action: "keyWords" },
  { displayName: "PLOT SUMMARY", action: "plotSummary" },
  { displayName: "SENTIMENT", action: "sentiment" },
  { displayName: "CRITIQUE", action: "critique" },
];

const BookDetails = ({
  title,
  author,
  issuedDate,
  publisher,
  rights,
  language,
  flag,
  handleActionClick,
}: BookDetailsProps) => (
  <CardHeader>
    <CardTitle className="space-y-4 text-gray-800">
      <div className="flex items-center justify-between">
        <div className="text-xl font-semibold">{title}</div>
        <div className="flex space-x-2">
          {actions.map(({ displayName, action }) => (
            <Button onClick={() => handleActionClick(action)}>
              {displayName}
            </Button>
          ))}
        </div>
      </div>

      <div className="text-sm">
        Author: <span className="font-medium">{author?.name}</span>
        {author?.birthdate && author?.deathdate && (
          <span>
            {" "}
            ({author.birthdate} - {author.deathdate})
          </span>
        )}
      </div>
      <div className="text-sm">
        Issued Date: <span className="font-medium">{issuedDate}</span>
      </div>
      <div className="text-sm">
        Publisher: <span className="font-medium">{publisher}</span>
      </div>
      <div className="text-sm">
        Rights: <span className="font-medium">{rights}</span>
      </div>
      <div className="flex text-sm">
        Language:
        <img
          src={flag}
          alt={language}
          className="w-8 rounded-sm border border-gray-300 ml-2"
          loading="lazy"
        />
      </div>
    </CardTitle>
  </CardHeader>
);

export default BookDetails;
