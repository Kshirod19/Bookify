import React, { useState } from "react";
import { useFirebase } from "../context/Firebase";

const List = () => {
  const firebase = useFirebase();

  const [name, setName] = useState("");
  const [isbnNumber, setIsbnNumber] = useState("");
  const [price, setPrice] = useState("");
  const [coverPic, setCoverPic] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await firebase.handleCreateNewListing(name, isbnNumber, price, coverPic);
  };

  return (
    <div className="h-screen w-full bg-[#2C2C2C] flex justify-center p-5 items-center">
      <div className="bg-[#3B3B3B] text-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto">
        <form className="text-left" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="bookname"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Enter Book Name
            </label>
            <input
              type="text"
              id="bookname"
              className="bg-[#2C2C2C] border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Book Name"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="ISBN"
              className="block mb-2 text-base font-medium text-gray-300"
            >
              ISBN
            </label>
            <input
              type="text"
              id="ISBN"
              className="bg-[#2C2C2C] border border-gray-600 text-gray-300 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              onChange={(e) => setIsbnNumber(e.target.value)}
              value={isbnNumber}
              placeholder="ISBN Number"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="price"
              className="block mb-2 text-base font-medium text-gray-300"
            >
              Enter Price
            </label>
            <input
              type="text"
              id="price"
              className="bg-[#2C2C2C] border border-gray-600 text-gray-300 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              placeholder="Price"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="coverphoto"
              className="block mb-2 text-base font-medium text-gray-300"
            >
              Upload Cover Photo
            </label>
            <input
              type="file"
              id="coverphoto"
              className="bg-[#2C2C2C] border border-gray-600 text-gray-300 text-sm rounded-lg block w-full p-2.5 file:bg-[#2C2C2C] file:border-none file:text-white"
              required
              onChange={(e) => setCoverPic(e.target.files[0])}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default List;
