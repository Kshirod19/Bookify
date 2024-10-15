import { useEffect, useState } from "react";
import React from "react";
import { useFirebase } from "../context/Firebase";
import BookCard from "../Components/BookCard";

const Home = () => {
  const firebase = useFirebase();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const books = await firebase.listAllBooks();
      setBooks(books.docs);
    };
    fetchBooks();
  }, [firebase]);

  return (
    <div
      className="bg-[#2C2C2C] h-auto w-full flex flex-col items-center
      md:flex-row lg:flex-row md:justify-center gap-5 px-3  overflow-y-scroll pt-24 pb-8  scrollbar"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-screen-lg place-content-center">
        {books.map((book) => (
          <div key={book.id} className="flex justify-center">
            {" "}
            {/* Move key here */}
            <BookCard
              id={book.id}
              link={`/book/view/${book.id}`}
              {...book.data()}
              className="w-full" // Full width to adapt to grid columns
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
