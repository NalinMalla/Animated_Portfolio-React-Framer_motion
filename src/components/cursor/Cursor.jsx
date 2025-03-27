import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import "./cursor.scss";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Normally when using react we should use useRef(); however, in this case the element will be our window so we had to use an event listener instead.
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
      className="cursor"
      animate={{ x: position.x-10, y: position.y-4 }}
    ></motion.div>
  );
};

export default Cursor;
