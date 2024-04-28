import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import { motion } from "framer-motion";

const MainProjectWebDetail = ({ img, name, desc, tech, link }) => {
  return (
    <div className="p-2">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: [0.5, 1], opacity: [0, 1] }}
        transition={{ duration: 0.7 }}
        className="w-full md:h-[450px] sm:h-[420px] h-full rounded-lg border border-slate-300 group transform transition-all duration-300 hover:scale-[102%] pb-4">
        <Link href={link}>
          <div className="w-full md:h-[55%] sm:h-[65%] h-[50%] relative">
            <div className="absolute top-0 left-0 flex gap-2 justify-center items-center w-full h-full font-semibold text-white bg-black/70 rounded-t-lg text-lg opacity-0 transition-all duration-300 group-hover:opacity-100">
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
            <Link href={link} className="font-semibold text-xl">
              {name}
            </Link>
            <p className="text-justify text-sm ">{desc}</p>
          </div>
          <div className="flex gap-3">
            {tech.map((item, index) => (
              <div key={index}>
                <Logo name={item} size={24} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MainProjectWebDetail;
