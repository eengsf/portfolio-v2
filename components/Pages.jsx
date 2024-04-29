import Aside from "@/components/Aside";
import Main from "@/components/Main";
import TopNavbar from "./TopNavbar";
import { useSelector } from "react-redux";

const Pages = () => {
  const { theme } = useSelector((state) => state.counterSlice);

  return (
    <div className={`${theme ? "bg-white text-black" : "bg-black text-white"}`}>
      <div className="2md:hidden block">
        <TopNavbar />
      </div>
      <div className="flex 2md:flex-row flex-col max-w-6xl 2md:h-screen h-full mx-auto 2md:py-12 pb-5 pt-28 2lg:px-0 2md:px-10 px-5 gap-12">
        <aside className="w-60 h-full 2md:flex hidden">
          <Aside />
        </aside>
        <main className="flex flex-1">
          <Main />
        </main>
      </div>
    </div>
  );
};

export default Pages;

// import Aside from "@/components/Aside";
// import Main from "@/components/Main";
// import TopNavbar from "./TopNavbar";
// import { useSelector } from "react-redux";

// const Pages = () => {
//   const { theme } = useSelector((state) => state.counterSlice);

//   return (
//     <>
//       <TopNavbar />
//       <div className="flex 2md:flex-row flex-col max-w-6xl h-screen mx-auto 2md:py-12 pb-5 pt-28 2lg:px-0 2md:px-10 px-5 gap-12">
//         <aside className="w-60 2md:flex hidden">
//           <Aside />
//         </aside>
//         <main className="flex flex-1">
//           <Main />
//         </main>
//       </div>
//       <style jsx>{`
//         body {
//           background-color: ${theme ? "white" : "black"};
//         }
//       `}</style>
//     </>
//   );
// };

// export default Pages;
