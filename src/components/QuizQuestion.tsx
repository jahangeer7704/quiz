"use client";

import React, { useState } from "react";
import victory from "@/../public/victory.svg";
import Image from "next/image";
import fail from "@/../public/fail.svg";
type Props = {
  question: string;
  option: string[];
  answer: string;
};
function QuizQuestion({ question, option, answer }: Props) {
  const [toast, setToast] = useState({ view: false, message: "" });
  const handleAnswer = (value: string) => {
    if (value === answer) {
      setToast({ view: true, message: "correct" });
    } else {
      setToast({ view: true, message: "wrong" });
    }
  };
  return (
    <>
      {toast.view && (
        <div className="h-screen w-screen grid place-content-center absolute backdrop-blur-md">
          <div className=" h-[300px] w-[500px] rounded-xl flex justify-center flex-col gap-5">
            {toast.message === "correct" && (
              <>
                <p className="text-4xl font-bold text-center text-[#6940aa]">
                  Congrats
                </p>

                <Image className="m-auto" src={victory} alt="victory" />
              </>
            )}
            {toast.message === "wrong" && (
              <>
                <p className="text-4xl font-bold text-center text-red-500">
                  Oop's Wrong answer
                </p>
                <p className="text-xl font-bold text-green-600 text-center">
                  Correct Answer:{" "}
                  <span className="font-normal">{answer.toUpperCase()}</span>
                </p>
                <div className=" flex justify-center">
                  <Image className="m-auto" src={fail} alt="victory" />
                </div>
              </>
            )}
            <div className="flex justify-center">
              <button
                onClick={() => setToast({ view: false, message: "" })}
                className={`mt-${
                  toast.message === "Correct" ? "25" : "15"
                } bg-[#6940aa] w-[300px] px-10 py-3 rounded-md text-white`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
      <main className="w-screen h-screen  flex justify-center items-center">
        <div
          style={{ boxShadow: " rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;" }}
          className="w-[900px] -[#CAF0F8] b p-10 rounded-lg flex flex-col   gap-5"
        >
          <div className="gap-10 p-4 b bg-white rounded-lg w-[700px] m-auto " style={{boxShadow:" rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;"}}>
            <div className="text-xl font-bold text-center text-[#6940aa] font-sans">
              {question}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 m-auto mt-10 w-[700px]  p-7 rounded-lg">
            <button
              onClick={() => handleAnswer("a")}
              className=" flex p-2 gap-x-6 rounded-md font-light text-black"
            >
              <span
                className="text-[#6940aa] bg-white shadow-slate-400 h-10 w-10 mt-3 font-sans block font-bold rounded-full p-2 shadow-lg"
               
              >
                A
              </span>
              <span
                style={{
                  boxShadow: " rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;",
                }}
                className="bg-white block p-2 rounded-lg hover:bg-[#6940aa] hover:text-white font-sans"
              >
                {option[0]}
              </span>
            </button>
            <button
              onClick={() => handleAnswer("b")}
              className=" flex p-2 gap-x-6 rounded-md font-light text-black"
            >
              <span className="text-[#6940aa] bg-white shadow-slate-400 h-10 w-[50px] mt-3 font-sans block font-bold rounded-full p-2 shadow-lg">
                B
              </span>
              <span
                style={{
                  boxShadow: " rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;",
                }}
                className="bg-white block p-2 rounded-lg hover:bg-[#6940aa] hover:text-white font-sans"
              >
                {option[1]}
              </span>
            </button>
            <button
              onClick={() => handleAnswer("c")}
              className=" flex p-2 gap-x-6 rounded-md font-light text-black"
            >
              <span className="text-[#6940aa] bg-white shadow-slate-400 h-10 w-[54px] mt-3 font-sans block font-bold rounded-full p-2 shadow-lg">
                C
              </span>
              <span
                style={{
                  boxShadow: " rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;",
                }}
                className="bg-white block p-2 rounded-lg hover:bg-[#6940aa] hover:text-white font-sans"
              >
                {option[2]}
              </span>
            </button>
            <button
              onClick={() => handleAnswer("d")}
              className=" flex p-2 gap-x-6 rounded-md font-light text-black"
            >
              <span className="text-[#6940aa] bg-white shadow-slate-400 h-10 w-[48px] mt-3 font-sans block font-bold rounded-full p-2 shadow-lg">
                D
              </span>
              <span
                style={{
                  boxShadow: " rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;",
                }}
                className="bg-white block p-2 rounded-lg hover:bg-[#6940aa] hover:text-white font-sans"
              >
                {option[3]}
              </span>
            </button>
          </div>
          <div className="flex justify-between">
            <button className="bg-red-400 p-3 px-7 rounded-xl text-white">
              Back
            </button>
            <button className="bg-[#6940aa] p-3 px-7 rounded-xl text-white">
              Skip
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default QuizQuestion;
