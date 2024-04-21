'use client'
import { AiOutlineCloseCircle } from "react-icons/ai"; 
import React, { useState } from "react";
import victory from '@/../public/victory.svg'
import Image from "next/image";
type Props = {
    question: string;
    option: string[];
    answer: string;
}
function QuizQuestion({question,option,answer}:Props) {
    const [toast,setToast]=useState({view:false,message:''})
    const handleAnswer=(value:string)=>{
        if(value===answer){
            setToast({view:true,message:'correct'})
        }
        else{
            setToast({view:true,message:'wrong'})
        }
    }
  return (
    <>
       {toast.view && 
       <div className="h-screen w-screen grid place-content-center absolute backdrop-blur-md">

    <div className=" h-[300px] w-[500px] rounded-xl flex justify-center flex-col gap-5">

    {toast.message === 'correct' &&
    <>
    <p className="text-4xl font-bold text-center text-[#6940aa]">Congrats</p>
    
    <Image className="m-auto" src={victory} alt="victory"/>
    </>

    }
     {toast.message === 'wrong' &&
    <>
    <p className="text-4xl font-bold text-center text-red-500">Oop's  Wrong answer</p>
     <p className="text-xl font-bold text-green-600 text-center">Correct Answer: <span className="font-normal">{answer.toUpperCase()}</span></p>
    <div className=" flex justify-center">
    <AiOutlineCloseCircle className="text-red-500 text-9xl "/>

    </div>
    </>

    }
   <div className="flex justify-center">
   <button onClick={()=>setToast({view:false,message:''})} className={`mt-${toast.message === 'Correct' ? '25' : '15' } bg-[#6940aa] w-[300px] px-10 py-3 rounded-md text-white`}>Next</button>
   </div>
    </div>
       </div>
    }
    <main className="w-screen h-screen  flex justify-center items-center ">
      <div className="w-[700px] bg-[#bfbcbc] p-10 rounded-lg flex flex-col gap-5">
        <div className="gap-10 p-4 bg-white rounded-lg w-[500px] m-auto ">
          <div className="text-xl font-bold font-serif text-[#6940aa]">
           {question}
          </div>
         
        </div>
        <div className="grid grid-cols-2 gap-10 m-auto mt-10 w-[500px] bg-white p-7 rounded-lg">
          <button onClick={()=>handleAnswer('a')} className="bg-white hover:bg-green-400 border-gray-400 border p-2 rounded-md font-light text-black">{'a)'}{option[0]}</button>
          <button onClick={()=>handleAnswer('b')}  className="bg-white hover:bg-green-400 border-gray-400 border p-2 rounded-md font-light text-black">{'b)'}{option[1]}</button>
          <button onClick={()=>handleAnswer('c')}  className="bg-white hover:bg-green-400 border-gray-400 border p-2 rounded-md font-light text-black">{'c)'}{option[2]}</button>
          <button onClick={()=>handleAnswer('d')}  className="bg-white hover:bg-green-400 border-gray-400 border p-2 rounded-md font-light text-black">{'d)'}{option[3]}</button>
        </div>
        <div className="flex justify-between">
          <button className="bg-red-400 p-3 px-7 rounded-xl text-white">Back</button>
          <button className="bg-[#6940aa] p-3 px-7 rounded-xl text-white">Skip</button>
        </div>
      </div>
    </main>

 
    </>
  );
}

export default QuizQuestion;
