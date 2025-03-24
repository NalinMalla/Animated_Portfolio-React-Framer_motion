import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], //The animation starts when the target element reaches the top of the view port and the animation is going to end when the element reaches the bottom of the view port i.e. restart of viewport
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]); //When scrollYProgress == 0 then yBg == 0%.
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  
  // console.log(type +" scrollYProgress : ", yBg)

  // window.addEventListener('scroll', ()=>{
  //   console.log(window.scrollY);
  // })

  return (
    <div
      className="parallax"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "What We Do?" : "What We Did?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "sun.png"
          })`,
        }}
        className="planets"
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
