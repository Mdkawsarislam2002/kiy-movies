import React from "react";
import { Dark, Light } from "./Icon";
import { motion, AnimatePresence } from "framer-motion";

const DarkModeToggle = ({ theme }) => {
  return (
    <div className="border border-teal-600 rounded-full">
      <AnimatePresence>
        {theme == "light" ? (
          <motion.div
            className="absolute top-0 left-0"
            key={theme}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <Light />
          </motion.div>
        ) : (
          <motion.div
            className="absolute top-0 left-0"
            key={theme}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <Dark />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DarkModeToggle;
