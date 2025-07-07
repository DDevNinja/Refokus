import { motion } from "framer-motion";
import React from "react";

function Marquee({ imageurls,direction }) {
  return (
    <div className="flex w-full gap-20 py-8 whitespace-nowrap overflow-hidden">
      <motion.div
        initial={{ x: direction==='left'?"0%":"-100%" }}
        animate={{ x: direction==='left'?"-100%":"0%" }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="flex flex-shrink-0 gap-20"
      >
        {[...imageurls, ...imageurls].map((url, index) => (
          <img
            src={url.trim()}
            key={index}
            className="flex-shrink-0 w-[6vw] object-contain"
            alt="logo"
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
