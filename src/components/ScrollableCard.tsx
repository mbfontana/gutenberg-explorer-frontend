import { BookResponse } from "../api/books";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const ScrollableCard = ({
  text,
  publisher,
  issuedDate,
  rights,
  title,
  language,
  author,
  flag,
}: BookResponse) => {
  return (
    <Card className="w-full bg-white shadow-lg rounded-lg border border-gray-200 p-4">
      <CardHeader>
        <CardTitle className="space-y-4 text-gray-800">
          <div className="text-xl font-semibold">Title: {title}</div>
          <div className="text-sm">
            Author: <span className="font-medium">{author?.name}</span>
            {author?.birthdate && author?.deathdate && (
              <span>author?.birthdate - author?.deathdate</span>
            )}
          </div>
          <div className="text-sm ">
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
      <CardContent
        style={{ height: "750px" }}
        className="overflow-y-auto bg-gray-50 text-gray-700 leading-relaxed"
      >
        <p>{text}</p>
      </CardContent>
    </Card>
  );
};

export default ScrollableCard;
