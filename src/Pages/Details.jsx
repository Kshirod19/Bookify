import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFirebase } from "../context/Firebase";

const Details = () => {
  const params = useParams();
  const firebase = useFirebase();

  const [qty, setQty] = useState(1);
  const [data, setData] = useState(null);
  const [url, setURL] = useState(null);
  const [showPopup, setShowPopup] = useState(false); // For order placed popup
  const [showAlert, setShowAlert] = useState(false); // New state for custom alert

  useEffect(() => {
    firebase.getBookById(params.bookId).then((value) => setData(value.data()));
  }, []);

  const placeOrder = async () => {
    const isLoggedIn = firebase.isLoggedIn;
    if (!isLoggedIn) {
      // Show custom alert if the user is not logged in
      setShowAlert(true);
      return;
    }

    const result = await firebase.placeOrder(params.bookId, qty);
    console.log("Order Placed", result);
    setShowPopup(true); // Show the popup for order placed
    setTimeout(() => {
      setShowPopup(false);
    }, 10000);
  };

  useEffect(() => {
    if (data) {
      const imageURL = data.imageURL;
      firebase.getImageURL(imageURL).then((url) => setURL(url));
    }
  }, [data]);

  if (data == null) return <h1>Loading...</h1>;

  return (
    <div className="bg-[#2C2C2C] flex justify-center items-center h-screen lg:pt-20 md:p-10 px-5 pt-10 w-full mt-0">
      <div className="flex flex-col md:flex-row justify-evenly gap-5 lg:gap-10 bg-[#3B3B3B] p-5 items-center rounded-xl lg:w-[800px] md:w-[650px] sm:w-[400px] w-[300px]">
        <div className="flex items-center justify-center w-full">
          <img
            src={url}
            alt="Book"
            className="w-40 rounded-lg lg:w-64 md:w-60"
          />
        </div>
        <div className="flex flex-col items-start justify-center w-full gap-2 text-white lg:gap-5 md:gap-3">
          <h1 className="text-2xl font-medium md:text-4xl lg:text-4xl">
            {data.name}
          </h1>
          <h1 className="text-lg text-blue-300 underline">Details :</h1>
          <div className="flex flex-col gap-1 text-sm tracking-wider lg:text-xl lg:gap-2 md:text-lg">
            <p>ISBN Number: {data.isbn} </p>
            <h4>Price : Rs. {data.price}</h4>
          </div>
          <h1 className="text-lg text-blue-300 underline">Owner Details </h1>
          <div className="flex flex-col gap-1 text-sm tracking-wider lg:gap-2 md:gap-1 lg:text-xl md:text-lg">
            <p>Name: {data.displayName}</p>
            <p>Email: {data.userEmail}</p>
          </div>

          {/* Counter component for quantity */}
          <div className="flex justify-between w-full mt-3">
            <form className="w-[120px] h-11 flex justify-center  items-center">
              <div
                className="inline-block bg-[#2C2C2C]  w-11 h-11 text-center leading-10 select-none rounded-l-xl hover:cursor-pointer"
                onClick={() =>
                  setQty((prevQty) => (prevQty > 0 ? prevQty - 1 : 0))
                }
              >
                -
              </div>
              <input
                type="number"
                id="number"
                value={qty}
                readOnly
                className="text-center bg-[#2C2C2C]  w-11 h-11 outline-none"
              />
              <div
                className="inline-block bg-[#2C2C2C]  w-11 h-11 text-center leading-10 select-none rounded-r-xl hover:cursor-pointer"
                onClick={() => setQty((prevQty) => prevQty + 1)}
              >
                +
              </div>
            </form>

            <button
              className="px-3 py-2 text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-900 focus:ring-4 focus:ring-blue-300 sm:text-sm md:text-base lg:text-lg "
              onClick={placeOrder}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Popup message for order placed */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#2C2C2C] bg-opacity-50 ">
          <div className="relative py-4 pl-4 text-center text-white bg-green-600 rounded-md shadow-lg pr-14">
            <p>Order Placed!</p>
            <button
              className="absolute px-3 py-1 mx-2 text-green-500 bg-white rounded-full top-3 right-1 hover:bg-gray-300"
              onClick={() => setShowPopup(false)}
            >
              X
            </button>
          </div>
        </div>
      )}

      {/* Custom alert for login */}
      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#2C2C2C] text-white p-6 rounded-lg text-center shadow-xl">
            <h2 className="mb-4 text-xl font-semibold">
              Please login to place an order
            </h2>
            <button
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
              onClick={() => setShowAlert(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
