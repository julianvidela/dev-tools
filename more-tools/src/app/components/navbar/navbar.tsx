"use client"
import Link from "next/link";
import FramerMagnetic from "../ui/framer";
import { motion } from "framer-motion";


const Navbar = () => {
  return (
    <nav className="flex justify-center w-full items-end p-8 z-1000 fixed bottom-0">
      <motion.section 
       initial="hidden"
       whileInView="visible"
       viewport={{once:true ,amount:0.5}}
       transition={{delay:0.5,duration:0.5}}
       variants={{
        hidden:{opacity:0 ,x: -50},
        visible:{opacity:1 , x:0},
       }}
      className="h-[65px] w-[620px] rounded-full bg-white flex justify-between items-center p-5">
        <div>
          <FramerMagnetic>
            <Link href="/">
              <svg
                width="20"
                height="20"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.95061 0.141423C9.21242 -0.0471411 9.56547 -0.0471411 9.82728 0.141423L18.4662 6.36365C18.8023 6.60573 18.8785 7.07445 18.6364 7.41055C18.3943 7.74666 17.9256 7.82288 17.5895 7.5808L16.9138 7.09411L16.2169 14.9917C16.0917 16.4113 14.9027 17.5 13.4776 17.5H11.4862H7.29172H5.30031C3.8752 17.5 2.68621 16.4113 2.56095 14.9917L1.86411 7.09411L1.18839 7.5808C0.85228 7.82288 0.383563 7.74666 0.141479 7.41055C-0.100605 7.07445 -0.0243834 6.60573 0.311724 6.36365L8.95061 0.141423ZM3.27995 6.07433L4.05515 14.8599C4.11208 15.5051 4.65253 16 5.30031 16H7.29172H11.4862H13.4776C14.1254 16 14.6658 15.5051 14.7227 14.8599L15.4979 6.07433L9.38895 1.67429L3.27995 6.07433Z"
                  fill="#7D7D7D"
                />
              </svg>
            </Link>
          </FramerMagnetic>
        </div>
        <hr className="vertical-hr" />
        <div className="flex flex-row gap-6 items-center normal-text text-font">
          <Link href="/pages/about">About</Link>
          <Link href="/pages/palett">Palette Generator</Link>
          <hr className="vertical-hr" />
          <Link href="/pages/line">Line-height</Link>
          <Link href="/pages/fonts">Fonts Combination</Link>
        </div>
        <hr className="vertical-hr" />
        <div>
          <FramerMagnetic>
            <svg
              width="20"
              height="20"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.5 0C14.7468 0 19 4.36043 19 9.74028C19 14.0428 16.2811 17.6928 12.5086 18.9819C12.027 19.0779 11.856 18.7737 11.856 18.5143C11.856 18.1932 11.8674 17.1445 11.8674 15.8411C11.8674 14.9329 11.5634 14.3401 11.2224 14.038C13.338 13.7967 15.561 12.973 15.561 9.23189C15.561 8.16789 15.1924 7.29963 14.5825 6.61753C14.6813 6.37148 15.0071 5.38076 14.4894 4.03936C14.4894 4.03936 13.6933 3.77836 11.8797 5.03806C11.1207 4.82241 10.3075 4.71391 9.5 4.71011C8.6925 4.71391 7.88025 4.82241 7.12215 5.03806C5.3067 3.77836 4.5087 4.03936 4.5087 4.03936C3.99285 5.38076 4.3187 6.37148 4.41655 6.61753C3.8095 7.29963 3.43805 8.16789 3.43805 9.23189C3.43805 12.9635 5.6563 13.7998 7.76625 14.0459C7.49455 14.2891 7.2485 14.7181 7.163 15.348C6.6215 15.5969 5.2459 16.0276 4.3985 14.539C4.3985 14.539 3.89595 13.6031 2.94215 13.5347C2.94215 13.5347 2.0159 13.5224 2.87755 14.1266C2.87755 14.1266 3.4998 14.4259 3.93205 15.5516C3.93205 15.5516 4.4897 17.2901 7.1326 16.7011C7.13735 17.5152 7.1459 18.2825 7.1459 18.5143C7.1459 18.7718 6.9711 19.0731 6.49705 18.9828C2.72175 17.6956 0 14.0438 0 9.74028C0 4.36043 4.2541 0 9.5 0Z"
                fill="#7D7D7D"
              />
            </svg>
          </FramerMagnetic>
        </div>
      </motion.section>
    </nav>
  );
};

export default Navbar;
