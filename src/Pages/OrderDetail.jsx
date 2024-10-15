import React from "react";
import { useParams } from "react-router-dom";
import { useFirebase } from "../context/Firebase";
import { useEffect, useState } from "react";

const OrderDetail = () => {
  const firebase = useFirebase();
  const params = useParams();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    firebase.getOrders(params.bookId).then((orders) => setOrders(orders.docs));
  }, [firebase, params.bookId]);

  return (
    <div
      className={`bg-[#2C2C2C] w-full flex flex-col text-white items-center px-3 pt-20 ${
        orders.length > 0 ? "min-h-screen" : "h-screen"
      } overflow-y-auto`}
    >
      <h1 className="my-4 mb-5 text-4xl font-normal">Order Details</h1>
      <div
        className="lg:p-6 md:p-4 p-2 flex flex-col justify-evenly items-center gap-5
        sm:h-[250px] md:h-[300px] lg:h-[320px] 
        sm:w-[280px] md:w-[450px] lg:w-[550px] box-border"
      >
        {orders.length > 0 ? (
          orders.map((order) => {
            const data = order.data();
            return (
              <div
                key={order.id}
                className="bg-[#3B3B3B] border border-gray-700 rounded-lg p-4 w-full"
              >
                <h1 className="flex items-center justify-start gap-5 text-lg font-medium text-gray-400 sm:text-xl md:text-2xl">
                  Order By:{" "}
                  <span className="text-base text-blue-400 sm:text-lg md:text-xl">
                    {data.displayName}
                  </span>
                </h1>
                <h2 className="flex items-center justify-start gap-5 text-lg font-medium text-gray-400 sm:text-xl md:text-2xl">
                  Quantity:{" "}
                  <span className="text-base text-blue-400 sm:text-lg md:text-xl">
                    {data.qty}
                  </span>
                </h2>
                <h3 className="flex items-center justify-start gap-5 text-lg font-medium text-gray-400 sm:text-xl md:text-2xl">
                  Email:{" "}
                  <span className="text-base text-blue-400 sm:text-lg md:text-xl">
                    {data.userEmail}
                  </span>
                </h3>
              </div>
            );
          })
        ) : (
          <p className="text-lg text-gray-500">No orders available.</p>
        )}
      </div>
    </div>
  );
};

export default OrderDetail;
