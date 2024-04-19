"use client"
import { motion } from "framer-motion";
import { perspective,slideIn } from "./anim";

export default function AboutSection() {
  return (
    <main className="fixed h-screen w-full bg-dark">
      <section className="h-[80%]  flex  items-center flex-col justify-center m-auto ">
        <div 
         
         
        className="flex flex-col gap-10 ">
        <motion.h1
         initial="hidden"
         whileInView="visible"
         viewport={{once:true ,amount:0.5}}
         transition={{delay:0.2,duration:0.6}}
         variants={{
          hidden:{opacity:0 ,y: 50},
          visible:{opacity:1 , y:0},
         }}
         className=" flex text-[65px] tittle-font text-white">About</motion.h1>
        <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{once:true ,amount:0.5}}
         transition={{delay:0.3,duration:0.6}}
         variants={{
          hidden:{opacity:0 ,y: 50},
          visible:{opacity:1 , y:0},
         }} 
        
        className="flex gap-4">
            <h2 
            className="text-font text-[14px] color-t-about  ">
              About us
            </h2>
            <p className="text-[14px] text-font normal-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi, pariatur minus? Odio aliquam repellendus quae quas
              delectus molestias veniam voluptates.
            </p>
          </motion.div>



          <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{once:true ,amount:0.5}}
           transition={{delay:0.4,duration:0.6}}
           variants={{
            hidden:{opacity:0 ,y: 50},
            visible:{opacity:1 , y:0},
           }}
          className="flex gap-4">
            <h2 className="text-font text-[14px] color-t-about ">
              Palette Generator
            </h2>
            <p className="text-[14px] text-font normal-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi, pariatur minus? Odio aliquam repellendus quae quas
              delectus molestias veniam voluptates.
            </p>
          </motion.div>
          <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{once:true ,amount:0.5}}
           transition={{delay:0.5,duration:0.6}}
           variants={{
            hidden:{opacity:0 ,y: 50},
            visible:{opacity:1 , y:0},
           }}
         
           className="flex gap-4">
            <h2 className="text-font text-[14px] color-t-about ">Line-height</h2>
            
            <p className="text-[14px] text-font normal-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident possimus dignissimos, maiores facere eius sit odit natus
              vel doloribus nihil!
            </p>
          </motion.div>
          <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{once:true ,amount:0.5}}
           transition={{delay:0.6,duration:0.6}}
           variants={{
            hidden:{opacity:0 ,y: 50},
            visible:{opacity:1 , y:0},
           }}
           className="flex gap-4">
            <h2 className="text-font text-[14px] color-t-about">Fonts Combination</h2>
            <p className="text-[14px] text-font normal-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              magni dolores fugit ratione alias? Blanditiis expedita in et at
              libero!
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
