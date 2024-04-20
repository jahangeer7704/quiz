"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
function page() {
  const [select, setSelect] = useState({
    interface: "quiz",
  });
  const router = useRouter();

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setSelect({ interface: "game" });
      } else if (e.key === "ArrowLeft") {
        setSelect({ interface: "quiz" });
      } else if (e.key === "Enter") {
        console.log("jking", select.interface);
        router.push(`/${select.interface === "game" ? "games" : "quizzes"}`);
      }
    };
  
    window.addEventListener("keyup", handleKey);
    return () => window.removeEventListener("keyup", handleKey);
  }, [select]);
const handleRoute=(path:string)=>{
    router.push(`/${path}`);


}
  return (
    <div className="h-screen">
      <h1 className="text-6xl font-bold  font-serif text-center pt-10">
        <span className="text-[#6940aa]">Game</span> Interfaces
      </h1>
      <main className="flex justify-center gap-10 items-center h-[90%]">
        <motion.section
          initial={{
            height: 0,
          }}
          animate={{ height: 300 }}
          transition={{
            duration: 1,
            type: "tween",
          }}
          onClick={() =>{

              select.interface != "quiz" ? setSelect({ interface: "quiz" }) : null;
              handleRoute('quizzes')

          }
          }
          className={`  text-2xl font-bold border cursor-pointer shadow-lg  h-[300px] w-[300px] grid place-content-center ${
            select.interface === "quiz" ? "bg-[#6940aa] text-white" : ""
          } rounded-md`}
        >
          Technical Quiz
        </motion.section>
        <motion.section
          initial={{
            height: 0,
            color: "white",
          }}
          animate={{ height: 300, color: "black" }}
          transition={{
            duration: 1,
            type: "tween",
          }}
          onClick={() =>{

              select.interface != "game" ? setSelect({ interface: "game" }) : null;
             handleRoute('games')

          }
          }
          className={` text-2xl font-bold border cursor-pointer shadow-lg  h-[300px] w-[300px] grid ${
            select.interface === "game" ? "bg-[#6940aa] text-white" : ""
          } place-content-center rounded-md`}
        >
          Technical Games
        </motion.section>
      </main>
    </div>
  );
}

export default page;
