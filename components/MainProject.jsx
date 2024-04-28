import MainProjectWeb from "./MainProjectWeb";
import { motion } from "framer-motion";

const MainProject = () => {
  return (
    <motion.main
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.7 }}
      className="w-full h-full overflow-y-auto custom-scrollbar pb-12">
      <div className="flex flex-col gap-2 pb-5 border-b border-b-slate-300">
        <h1 className="2md:text-3xl text-2xl font-semibold">Projects</h1>
        <p className=" text-justify">
          Showcasing my passion for technology, design, and problem-solving
          through code.
        </p>
      </div>
      <MainProjectWeb />
    </motion.main>
  );
};

export default MainProject;
