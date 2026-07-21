// components/book-card.tsx

import { StarIcon } from "lucide-react";

const getHighResThumbnail = (url?: string) => {
  if (!url) return undefined;
  return url.replace("http://", "https://");
};

const BookCard = ({ book }: BookCardProps) => {
  const { title, authors, imageLinks, averageRating, language, publishedDate } =
    book.volumeInfo;

  // Google Books serves thumbnails over http — force https to avoid mixed-content issues
  const thumbnail = getHighResThumbnail(imageLinks?.thumbnail);

  return (
    <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-2/3 w-full bg-gray-200">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
            No image
          </div>
        )}
      </div>

      <div className="p-3">
        <h3 className="font-medium text-gray-800 truncate">{title}</h3>
        <p className="text-sm text-gray-500 truncate">
          {authors?.join(", ") || "Unknown author"}
        </p>
        <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
          {averageRating ? (
            <span className="flex items-center gap-1 text-gray-800 font-medium">
              <StarIcon size={12} className="fill-yellow-500 text-yellow-500" />
              {averageRating.toFixed(1)}
            </span>
          ) : (
            <p>N/A</p>
          )}
          {language && <span className="uppercase">{language}</span>}
          <span>{publishedDate ? publishedDate.split("-")[0] : "N/A"}</span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
