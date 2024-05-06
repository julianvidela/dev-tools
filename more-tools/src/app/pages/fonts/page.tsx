"use client";
import { motion } from "framer-motion";
import FontsGrid from "./fontsGrid";


const fonts = () => {
  return (
    <main
    
    
      className="grid grid-cols-4 gap-2 p-2 bg-dark w-full"
    >
<motion.div
initial="hidden"
whileInView="visible"
viewport={{once:true ,amount:0.5}}
transition={{delay:0.2,duration:0.5}}
variants={{
 hidden:{opacity:0 ,y: 50},
 visible:{opacity:1 , y:0},
}}>

      <FontsGrid imgUrl="/fonts1.png" bgColor="#161616" />
</motion.div>
<motion.div
initial="hidden"
whileInView="visible"
viewport={{once:true ,amount:0.5}}
transition={{delay:0.3,duration:0.5}}
variants={{
 hidden:{opacity:0 ,y: 50},
 visible:{opacity:1 , y:0},
}}
>

      <FontsGrid imgUrl="/fonts3.png" bgColor="#161616" />
</motion.div>
<motion.div
initial="hidden"
whileInView="visible"
viewport={{once:true ,amount:0.5}}
transition={{delay:0.4,duration:0.5}}
variants={{
 hidden:{opacity:0 ,y: 50},
 visible:{opacity:1 , y:0},
}}
>

      <FontsGrid imgUrl="/fonts2.png" bgColor="#161616" />
</motion.div>
<motion.div
initial="hidden"
whileInView="visible"
viewport={{once:true ,amount:0.5}}
transition={{delay:0.5,duration:0.5}}
variants={{
 hidden:{opacity:0 ,y: 50},
 visible:{opacity:1 , y:0},
}}
>

      <FontsGrid imgUrl="/fonts5.png" bgColor="#161616" />
</motion.div>
<motion.div
initial="hidden"
whileInView="visible"
viewport={{once:true ,amount:0.5}}
transition={{delay:0.6,duration:0.5}}
variants={{
 hidden:{opacity:0 ,y: 50},
 visible:{opacity:1 , y:0},
}}
>

      <FontsGrid imgUrl="/fonts4.png" bgColor="#161616" />
</motion.div>
<motion.div
initial="hidden"
whileInView="visible"
viewport={{once:true ,amount:0.5}}
transition={{delay:0.7,duration:0.5}}
variants={{
 hidden:{opacity:0 ,y: 50},
 visible:{opacity:1 , y:0},
}}
>

      <FontsGrid imgUrl="/fonts6.png" bgColor="#161616" />
</motion.div>
<motion.div
initial="hidden"
whileInView="visible"
viewport={{once:true ,amount:0.5}}
transition={{delay:0.8,duration:0.5}}
variants={{
 hidden:{opacity:0 ,y: 50},
 visible:{opacity:1 , y:0},
}}
>

      <FontsGrid imgUrl="/fonts7.png" bgColor="#161616" />
</motion.div>
<motion.div
initial="hidden"
whileInView="visible"
viewport={{once:true ,amount:0.5}}
transition={{delay:0.9,duration:0.5}}
variants={{
 hidden:{opacity:0 ,y: 50},
 visible:{opacity:1 , y:0},
}}
>

      <FontsGrid imgUrl="/fonts8.png" bgColor="#161616" />
</motion.div>


    </main>

  );
};

export default fonts;
