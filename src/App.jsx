import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar"; // Adjust the path as necessary
import { AnimatePresence } from "framer-motion"; // Make sure to import this if you're using it
import PageTransition from "./components/PageTransation"; // Adjust the path as necessary

// Import your lazy-loaded components
const Home = React.lazy(() => import("./Pages/Home"));
const Login = React.lazy(() => import("./Pages/Login"));
const Register = React.lazy(() => import("./Pages/Register"));
const List = React.lazy(() => import("./Pages/List"));
const Details = React.lazy(() => import("./Pages/Details"));
const Order = React.lazy(() => import("./Pages/Order"));
const OrderDetail = React.lazy(() => import("./Pages/OrderDetail"));

function App() {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <PageTransition>
                  <Home />
                </PageTransition>
              </React.Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <PageTransition>
                  <Login />
                </PageTransition>
              </React.Suspense>
            }
          />
          <Route
            path="/register"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <PageTransition>
                  <Register />
                </PageTransition>
              </React.Suspense>
            }
          />
          <Route
            path="/book/list"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <PageTransition>
                  <List />
                </PageTransition>
              </React.Suspense>
            }
          />
          <Route
            path="/book/view/:bookId"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <PageTransition>
                  <Details />
                </PageTransition>
              </React.Suspense>
            }
          />
          <Route
            path="/book/orders"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <PageTransition>
                  <Order />
                </PageTransition>
              </React.Suspense>
            }
          />
          <Route
            path="/books/orders/:bookId"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <PageTransition>
                  <OrderDetail />
                </PageTransition>
              </React.Suspense>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App; // Ensure you have this line at the end
