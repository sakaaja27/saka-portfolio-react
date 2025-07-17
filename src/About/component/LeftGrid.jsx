import { useEffect } from "react";
import GlassCard from "../../widget/GlassCard";
import { motion,useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function LeftGridContent() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="col-span-3 row-span-4 flex items-center justify-center"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <GlassCard className="p-6 md:p-16 w-full flex flex-col justify-center group">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold mb-6 text-white tracking-wide"
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        <motion.div
          className="text-gray-300 leading-relaxed text-[17px] space-y-4"
          variants={textVariants}
        >
          <motion.p variants={itemVariants}>
            Saya adalah seorang{" "}
            <span className="font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">
              Frontend Web Developer
            </span>{" "}
            yang antusias dalam menciptakan pengalaman digital yang menarik dan
            intuitif. Saya memiliki ketertarikan kuat pada{" "}
            <span className="font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">
              UI/UX Design
            </span>{" "}
            dan senang membangun antarmuka modern yang responsive, interaktif,
            dan mudah digunakan.
          </motion.p>

          <motion.p variants={itemVariants}>
            Dengan pengalaman di berbagai teknologi web terkini seperti{" "}
            <span className="font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">
              React, Tailwind CSS
            </span>
            , dan{" "}
            <span className="font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">
              Next.js
            </span>
            , saya terus belajar dan berkembang untuk menghasilkan produk
            digital yang berdampak dan berkelanjutan.
          </motion.p>
        </motion.div>
      </GlassCard>
    </motion.div>
  );
}