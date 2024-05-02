import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const MainProjectWebDetail = ({ img, name, desc, tech, link }) => {
  const { theme } = useSelector((state) => state.counterSlice);
  return (
    <motion.div
      initial={{ scale: 0.3, opacity: 0 }}
      animate={{ scale: [0.3, 1], opacity: [0, 1] }}
      transition={{ duration: 0.7 }}
      className="p-2">
      <div className="w-full md:h-[450px] sm:h-[420px] h-full rounded-lg border border-slate-300 group/project transform transition-all duration-300 hover:scale-[102%] pb-4">
        <Link href={link}>
          <div className="w-full md:h-[55%] sm:h-[65%] h-[50%] relative">
            <div className="absolute top-0 left-0 flex gap-2 justify-center items-center w-full h-full font-semibold text-white bg-black/70 rounded-t-lg text-lg opacity-0 transition-all duration-300 group-hover/project:opacity-100">
              <h1>View Project</h1>
              <Logo name={"arrowright"} size={24} />
            </div>
            <Image
              src={`/${img}`}
              alt="image"
              width={500}
              height={500}
              className="object-cover object-top rounded-t-lg w-full h-full"
            />
          </div>
        </Link>
        <div className="flex flex-col gap-2 justify-between w-full md:h-[45%] sm:h-[35%] h-[50%] p-5">
          <div className="flex flex-col gap-1">
            <Link
              href={link}
              className={`font-semibold text-xl ${
                theme
                  ? "group-hover/project:text-blue-500"
                  : "group-hover/project:text-orange-500"
              } `}>
              {name}
            </Link>
            <p className="text-justify text-sm ">{desc}</p>
          </div>
          <div className="flex gap-3 relative">
            {tech.map((item, index) => (
              <div
                key={index}
                className="group/tech cursor-pointer overflow-x-hidden">
                <Logo name={item} size={24} />
                <div className="absolute -z-10 transition-all duration-300 opacity-0 group-hover/tech:opacity-100 group-hover/tech:z-0 top-0 right-0">
                  <p>{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MainProjectWebDetail;
