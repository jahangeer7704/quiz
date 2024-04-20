"use client";
import React,{useEffect} from "react";
import Joystick from "./Joystick";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
function Home() {
  useEffect(() => {
    window.addEventListener("keyup", (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        router.push("/interface");
      }
    });
    return () =>
      window.removeEventListener("keyup", (e: KeyboardEvent) => {
        if (e.key === "Enter") {
        }
      });
  }, []);
  const router = useRouter();
  const routeInterface = () => {
    router.push("/interface");
  }
  return (
    <main className="bg-[#dcdcdc] h-screen ">
      <motion.h1 initial={{y:-500}} animate={{y:0}} transition={{duration:.5 , type:"tween"}} className=" first-letter:text-6xl font-bold first-letter:text-[#6940aa] text-3xl font-serif text-center pt-10">
        Tech Savvy Museum
      </motion.h1>
      <div className="flex pt-36 justify-center gap-10">
        <motion.section
          initial={{
            y: 100,
            x: -10000,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ duration: 1, type: "spring" }}
          className=" "
        >
          <Joystick />
        </motion.section>
        <motion.section
          initial={{
            y: 100,
            x: 10000,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ duration: 2, type: "tween" }}
        >
          <p className="text-[#6940aa] font-semibold font-serif text-5xl">
            Welcome
          </p>
          <p className="font-semibold font-serif text-4xl">
            To Coding Station ...
          </p>
          <motion.p animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay:2,duration:.5}} className="text-gray-600 mt-2  text-xl">
            Drive into the world of interactive gaming <br /> designed to
            sharpen your Non-Technical
            <br /> skills while having fun !
          </motion.p>
        </motion.section>
      </div>
      <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1,y:0 }} transition={{ delay: 2,duration:.5 }} className="flex justify-center pt-20">
        <button onClick={routeInterface} className="bg-[#6940aa] text-white font-bold font-serif text-3xl p-5 rounded-xl ">
          Get Started
        </button>
      </motion.div>
    </main>
  );
}

export default Home;
