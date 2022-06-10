import React from "react";
import { motion } from "framer-motion";
const Loading = () => {
  const loadingContainer = {
    width: "15rem",
    height: "4rem",
    display: "flex",
    justifyContent: "space-around",
  };

  const loadingCircle = {
    display: "block",
    width: "3rem",
    height: "3rem",
    backgroundColor: "#d8c54e",
    borderRadius: "1.5rem",
  };

  const loadingContainerVariants = {
    start: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const loadingCircleVariants = {
    start: {
      y: "50%",
    },
    end: {
      y: "150%",
    },
  };

  const loadingCircleTransition = {
    duration: 0.4,
    yoyo: Infinity,
    ease: "easeInOut",
  };
  return (
    <motion.div
      style={loadingContainer}
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
    </motion.div>
  );
};
export default Loading;
