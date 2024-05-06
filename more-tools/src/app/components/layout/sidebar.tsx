import Link from "next/link";
import { linksData } from "./linksData";


const sidebar = () => {
    return ( 
         <main className="bg-transparen border-main z-50 w-full overflow-y-auto overflow-x-hidden fixed md:left-0 md:h-full md:w-56 md:pb-10 bg-white dark:bg-neutral-900 backdrop-blur-md opacity-95 border-r border-neutral-200 dark:border-neutral-800 ">
            <nav className="flex flex-col gap-1 p-3">
                 {linksData.map((link,index) => (
                    <div className="h-10  hover:bg-[#4040404d] rounded-lg flex items-center p-4 text-[#a3a3a3] hover:text-white ">
                        <Link
                        className="text-[15px]"
                        key={index}
                        href={link.href}
                        >{link.text}</Link>
                    </div>
                 ))}
            </nav>
         </main>

 );
}
 
export default sidebar;