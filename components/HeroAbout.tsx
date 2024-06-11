"use client"
import React from 'react'
import {  motion } from "framer-motion";
const variants = {
  hidden: { opacity: 0 },
  visible: {  opacity: 1 },
  exiting: { opacity: 0},
};
const items = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  src: `https://picsum.photos/id/${i}/400`
}));
const HeroAbout = () => {
  return (
    <section className='prose-xs md:prose-lg      '>
     <article className=' py-24 items-baseline  h-full  md:px-12 text-left text-balance flex flex-col gap-3 p-5'>
     <h1> અમે  મદદ કરી રહ્યા છીએ  તમારા જીવનની દરેક ક્ષણને અમૂલ્ય અને યાદગાર બનાવવામાં. દરેક પ્રોજેક્ટ, દરેક ફોટો, અને દરેક અનુભવ એક વિશેષ અધ્યાય ખોલે છે.</h1>
    
    <div className='flex items-baseline flex-col md:flex-row  gap-3'>
     <button className="btn btn-outline btn-primary w-fit btn-sm md:btn-md">About us</button>
    <button className='link text-left text-neutral'>ચાલો ક્ષણોને અમૂલ્ય બનાવીએ!</button>
    </div>
     </article>

   
    </section>
  )
}

export default HeroAbout