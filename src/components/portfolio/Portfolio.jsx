import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./portfolio.scss";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=comress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas quod at eum, modi cum iste. A earum iure aspernatur debitis id ullam corrupti dolores quos. Veritatis nisi fuga modi rem?",
  },
  {
    id: 2,
    title: "Next.js Commerce",
    img: "https://images.pexels.com/photos/31129463/pexels-photo-31129463/free-photo-of-traditional-japanese-couple-in-kimono-with-parasols.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas quod at eum, modi cum iste. A earum iure aspernatur debitis id ullam corrupti dolores quos. Veritatis nisi fuga modi rem?",
  },
  {
    id: 3,
    title: "Vannilla JS App",
    img: "https://images.pexels.com/photos/26794620/pexels-photo-26794620/free-photo-of-boats-on-lake-under-fog.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas quod at eum, modi cum iste. A earum iure aspernatur debitis id ullam corrupti dolores quos. Veritatis nisi fuga modi rem?",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/30063974/pexels-photo-30063974/free-photo-of-elegant-woman-in-red-dress-surrounded-by-birds.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas quod at eum, modi cum iste. A earum iure aspernatur debitis id ullam corrupti dolores quos. Veritatis nisi fuga modi rem?",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="portfolio">
      <div className="progress">
        <h1>Featured Work</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
