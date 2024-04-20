'use client'
import React, { useState } from 'react'

import { motion } from 'framer-motion';
function page({params}: {params: {quiz: string}} ) {
const {quiz}=params

const [data,setData]=useState(gameTemplate[quiz])
   
    
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="shadow-md rounded-lg  w-[500px] bg-white p-10">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-[#6940aa]">
            {data.title} <span className="font-light">Quiz</span>
          </h1>
          <p className="text-2xl font-bold text-gray-700 pt-10">
        {data.intro}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 py-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-700">
{data.question}            </h2>
            <p className="text-xl text-gray-600 pt-2">
             {data.data}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <motion.button
              className="bg-[#6940aa] hover:bg-[#603EAA] text-white font-bold py-2 px-8 rounded shadow"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                window.location.href = "/quizzes/html-intro/1";
              }}
            >
              Start Quiz
            </motion.button>
          </div>
        </div>
      </div>
    </div>




  )
}

export default page

const  gameTemplate:any={
    html:{
        title:"HTML",
        intro:'Get ready to learn the basics of HTML, a language that powers the web.',
        question:"What is HTML?",
        data:" HTML stands for HyperText Markup Language. It is the standard markup language used to create webpages With HTML you can create headings, paragraphs, images, videos, tables, lists,links, forms, and more."

    },
    css:{
        title:"CSS",
        intro:'Get ready to learn the basics of CSS, a language that makes your webpages look great.',
        question:"What is CSS?",
        data:" CSS stands for Cascading Style Sheet. It is the standard markup language used to describe the presentation of webpages. With CSS you can control the layout, colors, fonts and more."

    },
    java:{
        title:"JAVA",
        intro:'Get ready to learn the basics of JAVA, a language that is used to create Android apps.',
        question:"What is JAVA?",
        data:" JAVA stands for Java Platform, Standard Edition. It is a high-level, class-based, and object-oriented programming language that is designed to have as few implementation dependencies as possible."

    },
    python:{
        title:"PYTHON",
        intro:'Get ready to learn the basics of PYTHON, a language that is used to create web applications and games.',
        question:"What is PYTHON?",
        data:" PYTHON is a high-level, interpreted programming language. It was created by Guido van Rossum and first released in 1991. It is known for its simple syntax, code readability, and large standard library."

    },

}