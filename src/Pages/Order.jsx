import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import BookCard from "../Components/BookCard";

const Order = () => {
  const firebase = useFirebase();

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!firebase.isLoggedIn) {
      setLoading(false);
      return;
    }

    firebase
      .fetchMyBooks(firebase.user.uid)
      ?.then((books) => {
        setBooks(books.docs);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setLoading(false);
      });
  }, [firebase]);

  // Return login alert if the user is not logged in
  if (!firebase.isLoggedIn) {
    return (
      <div className="bg-[#2C2C2C] flex items-center justify-center h-screen w-full">
        <div className="bg-white p-5 rounded shadow-lg">
          <h1 className="text-red-600 text-2xl">Please Log in</h1>
        </div>
      </div>
    );
  }

  // Show loading state
  if (loading) {
    return (
      <div className="bg-[#2C2C2C] flex items-center justify-center h-screen w-full">
        <h1 className="text-white text-2xl">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="bg-[#2C2C2C] min-h-screen h-auto w-full flex flex-col items-center px-3 py-5 overflow-y-scroll pt-20 scrollbar">
      <h1 className="my-4 mb-5 text-4xl font-normal text-white">Orders</h1>
      {books.length === 0 ? (
        <h2 className="text-white text-2xl">No orders available</h2>
      ) : (
        <div className="grid w-full max-w-screen-lg grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 place-content-center">
          {books.map((book) => (
            <BookCard
              link={`/books/orders/${book.id}`}
              key={book.id}
              id={book.id}
              {...book.data()}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Order;
