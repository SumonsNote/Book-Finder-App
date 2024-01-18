import { useState } from "react";
import { books } from "../../assets/books";
import SearchBar from "../Trending/SearchBar";
import SortFunc from "../Trending/SortFunc";
import BookList from "./BookList";

export default function BookShelf() {
  const [bookList, setBookList] = useState([...books]);

  function handleSearch(searchTerm) {
    setBookList(
      books.filter((book) =>
        book.book_name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }

  function handleSort(sortBook) {
    let sortedBookList = [...bookList];

    if (sortBook === "name_asc") {
      sortedBookList.sort((a, b) => a.book_name.localeCompare(b.book_name));
    } else if (sortBook === "name_desc") {
      sortedBookList.sort((a, b) => b.book_name.localeCompare(a.book_name));
    } else if (sortBook === "year_asc") {
      sortedBookList.sort((a, b) => a.publish_date - b.publish_date);
    } else if (sortBook === "year_desc") {
      sortedBookList.sort((a, b) => b.publish_date - a.publish_date);
    }
    setBookList(sortedBookList);
  }

  function handleFavorite(bookId) {
    setBookList(
      bookList.map((book) =>
        book.id === bookId ? { ...book, isFavorite: !book.isFavorite } : book
      )
    );
  }

  return (
    <main className="my-10 lg:my-14">
      <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
        <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
          <div>
            <h6 className="mb-2 text-base lg:text-xl">Trending on 2021</h6>
            <h2 className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl">
              Trending Books of the Year
            </h2>

            <SearchBar onSearch={handleSearch} />
          </div>

          <SortFunc onSort={handleSort} />
        </div>
      </header>
      <BookList bookList={bookList} onFav={handleFavorite} />
    </main>
  );
}
