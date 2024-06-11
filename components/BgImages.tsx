"use client"

import { useEffect, useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
const images =["first", "second", "third", "fourth"]
const variants = {
  hidden: { opacity: 0 },
  visible: {  opacity: 0.5 },
  exiting: { opacity: 1},
};
export default function BgImages({}) {
  const [selectedImage, setSelectedImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (selectedImage === 2) {
        setSelectedImage(0);
        return;
      }
      setSelectedImage((prevValue) => {
        if (prevValue === 2) {
          return 0;
        }
        return prevValue + 1;
      });
    }, 9000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="absolute h-screen -z-10  left-0 top-0 w-full overflow-hidden">
   
       <MotionConfig transition={{ duration: 0.7 }}>
          <AnimatePresence initial={false}>
            <motion.img
              className="absolute object-cover h-full left-0 top-0 w-full object-center"
              key={images[selectedImage]}
              style={{ y: 0 }}
              initial="hidden"
              animate="visible"
              exit="exiting"
              variants={variants}
              src={`/images/${images[selectedImage]}.jpg`}
              alt="src"
              // variants={variants}
            />
          </AnimatePresence>
        </MotionConfig>

    </div>
  );
  
}
