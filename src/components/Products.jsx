import React, { useState } from "react";
import Product from "./Product";
import { motion } from "motion/react";
import first from "../assets/first.mp4";
import second from "../assets/second.mp4";
import third from "../assets/third.mp4";
import fourth from "../assets/fourth.mp4"

function Products() {
  var products = [
    {
      name: "Arqitel",
      desc: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      name: "TTR",
      desc: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
    {
      name: "YIR 2022",
      desc: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: true,
    },
    {
      name: "summon",
      desc: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
    },
  ];

  const [pos, setpos] = useState(0);
  var mover = (val) => {
    setpos(val * 18);
  };
  return (
    <div className="mt-10 relative">
      {products.map((elem, index) => (
        <Product val={elem} mover={mover} count={index} hover="true"/>
      ))}
      <div className="window absolute w-full h-full top-0 pointer-events-none ">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ease:[0.76,0,0.24,1],duration:0.6}}
          className="absolute w-[25rem] h-[18rem]  left-[44%] rounded-2xl overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ease:[0.76,0,0.24,1],duration:0.5}}
            className="w-full h-full "
          ><video autoPlay muted loop className="w-full object-cover">
            <source src={first} /></video></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ease:[0.76,0,0.24,1],duration:0.5}}
            className="w-full h-full bg-sky-300"
          ><video autoPlay muted loop className="w-full object-cover">
            <source src={second} /></video></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ease:[0.76,0,0.24,1],duration:0.5}}
            className="w-full h-full bg-sky-400"
          ><video autoPlay muted loop className="w-full object-cover">
            <source src={third} /></video></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ease:[0.76,0,0.24,1],duration:0.5}}
            className="w-full h-full bg-sky-500"
          ><video autoPlay muted loop className="w-full object-cover">
            <source src={fourth} /></video></motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
