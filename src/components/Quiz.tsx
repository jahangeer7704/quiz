'use client'
import { motion } from 'framer-motion'

import React from 'react'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/navigation'
function Quiz() {
const router=useRouter()
  const [select,setSelect]=useState({game:"html"})
  const handleClick=(selectedGame:string)=>{
if(selectedGame!=select.game){
  setSelect({game:selectedGame})
  router.push(`/quizzes/${selectedGame}`)
}
  }
  return (
    <div className='h-screen'>
      <h1 className='font-serif text-3xl font-bold text-center pt-10' style={{textShadow:'0px 3px 10px gray'}}>
        <span className='text-[#6940aa]'>Tech </span>
        is joy until it is a Hoy
      </h1>

<main className='grid place-content-center  h-[90%] bg-green-50 lg:grid-flow-col'>
<section className='border-2 border-gray-400 rounded-lg shadow-md flex  flex-col justify-center items-center w-[500px]'>
<h2 className='font-serif text-xl font-bold text-center ' style={{
    fontWeight: 'bold',
    background: 'linear-gradient(to right, #1D73F3 21%, #FF985E 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',}}>Select a Game</h2>
<div className='grid text-white font-bold grid-cols-2 gap-10 p-5'>
  <button onClick={()=>handleClick("html")} className={`${select.game=="html"?"bg-[#6940aa]":"text-black"} border-2 border-gray-400  p-5 w-[150px] rounded-lg`}>HTML</button>
  <button onClick={()=>handleClick("css")} className={`${select.game=="css"?"bg-[#6940aa]":"text-black"} border-2 border-gray-400  p-5 w-[150px] rounded-lg `}>CSS</button>
  <button onClick={()=>handleClick("java")} className={`${select.game=="java"?"bg-[#6940aa]":"text-black"} border-2 border-gray-400  p-5 w-[150px] rounded-lg`}>JAVA</button>
  <button onClick={()=>handleClick("python")} className={`${select.game=="python"?"bg-[#6940aa]":"text-black"} border-2 border-gray-400  p-5 w-[150px] rounded-lg`}>Python</button>
</div>
</section>
<section className='w-[500px] flex justify-center  p-4'>


<svg width="262" height="205" viewBox="0 0 262 205" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path initial={{fill:'rgb(0,0,0,0)'}} animate={{opacity:1,fill: '#6940aa'}} transition={{fill:{
  duration:1,

}}} d="M200.296 22.3848L199.696 22.3499C198.551 22.4537 197.714 23.4711 197.811 24.6108L198.503 32.1897C198.585 33.0334 199.193 33.7506 200.023 33.9688C212.428 37.1763 222.93 45.5567 228.839 56.9594C229.225 57.6934 230.008 58.1163 230.823 58.0415L238.537 57.3381C239.203 57.2785 239.807 56.8942 240.145 56.3148C240.486 55.7363 240.524 55.0323 240.25 54.4229C232.842 38.0438 217.911 26.0699 200.296 22.3848Z" fill="#"/>
<motion.path initial={{fill:'rgb(0,0,0,0)'}} animate={{opacity:1,fill: '#6940aa'}} transition={{fill:{
  duration:2
}}}d="M200.733 0.390539L200.282 0.384277C199.135 0.489086 198.3 1.49927 198.4 2.63832L199.077 10.0985C199.163 11.022 199.867 11.7718 200.805 11.9244C223.345 15.3963 242.406 30.8131 250.548 52.1532C250.871 53.0058 251.737 53.5404 252.639 53.4586L260.115 52.7764C260.755 52.7187 261.32 52.3717 261.673 51.8288C262.014 51.2844 262.094 50.6282 261.887 50.0267C252.589 23.461 228.587 3.98271 200.733 0.390539Z" fill="#"/>
<path d="M25.1317 204.059H33.613C41.3704 204.059 48.0288 198.544 49.4786 190.92L52.9294 180.726H8.98688V187.919C8.98688 196.832 16.2154 204.059 25.1317 204.059Z" fill="#6940aa"/>
<path d="M194.919 204.059H203.4C212.314 204.059 219.539 196.832 219.539 187.919V180.726H175.598L179.049 190.92C180.501 198.544 187.163 204.059 194.919 204.059Z" fill="#6940aa"/>
<path d="M52.9297 180.726L54.1103 177.238H8.98688V180.726H52.9297Z" fill="#6940aa"/>
<path d="M54.1103 177.237L57.0107 168.679H8.98688V177.237H54.1103Z" fill="#6940aa"/>
<path d="M57.0106 168.679L65.1271 144.743C69.9403 143.045 74.3963 140.621 78.3679 137.598C80.7696 135.775 83.6699 134.754 86.6857 134.754H141.853C144.857 134.754 147.759 135.775 150.16 137.598C154.142 140.621 158.596 143.045 163.409 144.743L171.517 168.679H219.539V126.879C226.411 117.176 229.884 104.899 228.041 91.7328C224.951 69.483 206.454 51.9836 184.086 50.0081C169.582 48.7256 156.295 53.8082 146.599 62.741C144.982 64.2301 142.816 65.0019 140.613 65.0019H87.9183C85.7104 65.0019 83.5579 64.2301 81.9281 62.741C72.2402 53.8079 58.9456 48.7253 44.4501 50.0081C22.0718 51.9839 3.5813 69.4833 0.487467 91.7288C-1.34965 104.896 2.11893 117.176 8.98686 126.879V168.679H57.0106ZM183.258 126.051C177.045 126.051 172.004 121.013 172.004 114.799C172.004 108.584 177.045 103.545 183.258 103.545C189.476 103.545 194.508 108.584 194.508 114.799C194.508 121.012 189.475 126.051 183.258 126.051ZM204.184 82.619C210.403 82.619 215.434 87.6555 215.434 93.8718C215.434 100.084 210.403 105.122 204.184 105.122C197.977 105.122 192.932 100.084 192.932 93.8718C192.932 87.6555 197.977 82.619 204.184 82.619ZM183.258 61.6926C189.476 61.6926 194.508 66.7254 194.508 72.9427C194.508 79.1561 189.476 84.1944 183.258 84.1944C177.045 84.1944 172.004 79.1561 172.004 72.9427C172.004 66.7254 177.044 61.6926 183.258 61.6926ZM162.338 82.619C168.545 82.619 173.588 87.6555 173.588 93.8718C173.588 100.084 168.545 105.122 162.338 105.122C156.118 105.122 151.078 100.084 151.078 93.8718C151.078 87.6555 156.118 82.619 162.338 82.619ZM48.4813 58.9801C70.2914 58.9801 87.9661 76.6568 87.9661 98.4669C87.9661 120.278 70.2914 137.954 48.4813 137.954C26.6656 137.954 8.98686 120.278 8.98686 98.4669C8.98686 76.6568 26.6656 58.9801 48.4813 58.9801Z" fill="#6940aa"/>
<path d="M219.539 177.237V168.679H171.517L174.415 177.237H219.539Z" fill="#6940aa"/>
<path d="M219.539 180.726V177.238H174.415L175.598 180.726H219.539Z" fill="#6940aa"/>
<path d="M8.98688 98.4666C8.98688 120.277 26.6659 137.954 48.4813 137.954C70.2914 137.954 87.9661 120.277 87.9661 98.4666C87.9661 76.6565 70.2914 58.9797 48.4813 58.9797C26.6656 58.9801 8.98688 76.6568 8.98688 98.4666ZM76.0637 89.4306V107.506H57.5232V126.051H39.4414V107.506H20.8988V89.4306H39.4414V70.8851H57.5232V89.4306H76.0637Z" fill="#AAD4C8"/>
<path d="M57.5232 126.051V107.507H76.0637V89.4308H57.5232V70.8853H39.4414V89.4308H20.8988V107.507H39.4414V126.051H57.5232Z" fill="#6940aa"/>
<path d="M172.004 72.943C172.004 79.1564 177.044 84.1948 183.258 84.1948C189.475 84.1948 194.508 79.1564 194.508 72.943C194.508 66.7253 189.475 61.6929 183.258 61.6929C177.044 61.6929 172.004 66.7257 172.004 72.943Z" fill="#82BFAB"/>
<path d="M172.004 114.799C172.004 121.013 177.044 126.051 183.258 126.051C189.475 126.051 194.508 121.013 194.508 114.799C194.508 108.584 189.475 103.545 183.258 103.545C177.044 103.545 172.004 108.584 172.004 114.799Z" fill="#82BFAB"/>
<path d="M151.078 93.8719C151.078 100.084 156.118 105.122 162.338 105.122C168.545 105.122 173.587 100.084 173.587 93.8719C173.587 87.6556 168.545 82.6191 162.338 82.6191C156.118 82.6191 151.078 87.6556 151.078 93.8719Z" fill="#82BFAB"/>
<path d="M192.932 93.8719C192.932 100.084 197.977 105.122 204.184 105.122C210.403 105.122 215.434 100.084 215.434 93.8719C215.434 87.6556 210.403 82.6191 204.184 82.6191C197.977 82.6191 192.932 87.6556 192.932 93.8719Z" fill="#82BFAB"/>
</svg>

</section>
</main>



    </div>
  )
}

export default Quiz