export default function FavoriteButton({ book, onFav }) {
  return (
    <button
      onClick={() => onFav(book.id)}
      className={`flex min-w-[132px] items-center justify-center gap-1 rounded-md ${
        book.isFavorite
          ? "bg-red-300 text-red-700"
          : "bg-[#1C4336]/[14%] text-[#1C4336]"
      } py-1.5 transition-all   lg:py-1.5`}
    >
      {book.isFavorite ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#b5180d"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-5 w-5 text-red-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      )}
      Favourite
    </button>
  );
}
