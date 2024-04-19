"use client";

import { motion } from "framer-motion";
import { perspective, slideIn } from "../about/anim";

interface Props {
  name?: string | undefined;
  description?: string | undefined;
  imgUrl?: string | undefined;
  bgColor?: string | undefined;
  dark?: boolean | undefined;
  
  }

const FontsGrid: React.FC<Props> = ({
  name = "block name",
  description = "this is good",
  imgUrl = "/project-1.png",
  bgColor = "#f9fafb",
  dark = false,
  
}) => {
  return (
    <div
  
      className={`h-[35rem] overflow-hidden shadow-box text-black ${
        dark ? "dark" : ""
      }`}
      style={{ background: `${bgColor}` }}
    >
      <div
        className="h-full w-full p-7 py-5 duration-[500ms]  transition-all ease-in-out hover:scale-[1.01] flex justify-between bg-right-bottom bg-cover  bg-no-repeat "
        style={{ backgroundImage: `url('${imgUrl}')` }}
      >
      
        
      </div>
    </div>
  );
};
export default FontsGrid;
