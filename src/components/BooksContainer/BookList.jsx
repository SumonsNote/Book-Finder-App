import star from "../../assets/star.svg";
import CartButton from "../CardContainer/CartButton";
import FavoriteButton from "../CardContainer/FavoriteButton";

export default function BookList({ bookList, onFav }) {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {bookList.map((book) => (
        <div key={book.id} className="space-y-3">
          <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
            <img className="max-w-[144px]" src={book.img} alt="book name" />
          </div>

          <div className="space-y-3">
            <h4 className="text-lg font-bold lg:text-xl">{book.book_name}</h4>
            <p className="text-xs lg:text-sm">
              By : <span>{book.author}</span>
            </p>
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-bold lg:text-xl">${book.price}</h4>

              <div className="flex items-center space-x-1">
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <span className="text-xs lg:text-sm">({book.rating} Star)</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs lg:text-sm">
              <CartButton />
              <FavoriteButton book={book} onFav={onFav} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
