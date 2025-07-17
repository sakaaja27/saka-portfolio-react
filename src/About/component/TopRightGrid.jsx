import { useEffect } from "react";
import GlassCard from "../../widget/GlassCard";
import { motion,useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function RightGridTopContent() {
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
      transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="col-span-2 row-span-2 col-start-4 flex items-center justify-center"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <GlassCard className="p-6 h-48 w-full flex flex-col justify-center group">
        <div className="flex items-center mb-3">
          <div className="w-3 h-3 rounded-full bg-emerald-400 mr-2 group-hover:animate-pulse" />
          <h3 className="text-lg font-semibold text-white">Education</h3>
        </div>
        <p className="text-gray-200 leading-relaxed">
          Mahasiswa Teknik Informatika yang sedang belajar dan mengembangkan
          diri dalam bidang IT.
        </p>
      </GlassCard>
    </motion.div>
  );
}