import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import framer-motion
import { useFirebase } from "../context/Firebase";
import { useNavigate } from "react-router-dom";

const BookCard = (props) => {
  const firebase = useFirebase();
  const navigate = useNavigate();
  const [url, setURL] = useState(null);

  useEffect(() => {
    firebase.getImageURL(props.imageURL).then((url) => setURL(url));
  }, [props.imageURL]);

  // Framer Motion Variants for smoother animations
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, // Slow down the duration for smoothness
        ease: [0.25, 0.46, 0.45, 0.94], // Use custom cubic bezier for smoother motion
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1, // Slightly slower image transition
        ease: "easeInOut", // Ease-in-out for a more gradual effect
      },
    },
  };

  return (
    <motion.div
      className="bg-[#3B3B3B] border border-gray-700 rounded-lg p-6 
      flex flex-row justify-evenly items-center gap-5 
      sm:h-[250px] md:h-[300px] lg:h-[320px] sm:w-[280px] md:w-[360px] lg:w-[490px] box-border"
      initial="hidden"
      animate="visible"
      variants={cardVariants}
    >
      <div className="flex items-center justify-center w-full">
        {url && (
          <motion.img
            src={url}
            alt={props.name}
            className="object-cover rounded-lg sm:h-48 md:h-56 lg:h-60"
            variants={imageVariants} // Apply smoother image animation
          />
        )}
      </div>

      <div className="flex flex-col items-start w-full gap-5">
        <h1 className="text-lg font-bold text-left text-white sm:text-xs md:text-xl lg:text-3xl">
          {props.name}
        </h1>
        <p className="text-sm font-medium tracking-wider text-left text-gray-300 sm:text-base md:text-sm">
          This Book has a title {props.name} and is sold by {props.displayName}.
          It costs Rs. {props.price}.
        </p>
        <motion.button
          className="px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:text-sm md:text-base lg:text-lg"
          onClick={() => navigate(props.link)}
          whileHover={{ scale: 1.05 }} // Add hover animation for button
          transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth hover transition
        >
          View
        </motion.button>
      </div>
    </motion.div>
  );
};

export default BookCard;
