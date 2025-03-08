import React from "react";
import { ImageAccordionExample } from "./accordion/ImageAccordionExample/ImageAccordionExample";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }} // İlk başta küçük ve saydam
    animate={{ opacity: 1, scale: 1 }} // Animasyon sırasında büyür ve opaklaşır
    transition={{
      duration: 0.8,  // Animasyon süresi
      ease: "easeOut", // Yavaşlayarak sona ermesini sağlar
    }}
    className="p-6 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg shadow-lg"  
    >
        <ImageAccordionExample />
    </motion.div>
  );
}

export default Home;
