"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import QuizQuestion from "@/components/QuizQuestion";
function page({ params }: { params: { startgame: string } }) {
  const path = usePathname();
  const router = useRouter();
  const { startgame } = params;
  const language = path.split("/")[2];
  const index = +startgame;
  if (!(language in data)) {
    router.push("/404");
  } else {
    const [quizData, setQuizData] = useState(data[language][index]);
  if(quizData){

    
        return (
          <QuizQuestion
            answer={quizData.answer}
            option={quizData.options}
            question={quizData.question}
          />
        );
  }
  else{

    router.push("/404");
  }
    
  }
}

export default page;

const data: any = {
  html: {
    1: {
      question:
        "1: What is the purpose of the <html> tag?",
      options: [
        "To define the document type",
        "To specify the character encoding",
        "To indicate the start of the HTML document",
        "To link to an external stylesheet",
      ],
      answer: "c",
    },
  },
};
