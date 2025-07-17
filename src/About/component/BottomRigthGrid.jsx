import { useEffect } from "react";
import GlassCard from "../../widget/GlassCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function RightGridBottomContent() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="col-span-2 row-span-2 col-start-4 row-start-3 flex items-center justify-center"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <GlassCard className="p-6 h-48 w-full flex flex-col justify-center group">
        <div className="flex items-center mb-3">
          <div className="w-3 h-3 rounded-full bg-purple-400 mr-2 group-hover:animate-pulse" />
          <h3 className="text-lg font-semibold text-white">Collaboration</h3>
        </div>
        <p className="text-gray-200 leading-relaxed mb-4">
          Apakah anda ingin memulai sebuah proyek bersama?
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/6285760199917"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg w-max text-sm font-medium inline-block text-center"
        >
          Contact Me
        </motion.a>
      </GlassCard>
    </motion.div>
  );
}
