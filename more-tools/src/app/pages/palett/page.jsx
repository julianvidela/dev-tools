"use client"
import { useState } from "react";
import FormColor from "./formColor";
import Values from "values.js"
import DisplayColors from "./displayColors"





const palett = () => {
    const [list, setList] = useState(new Values("blue").all(22));
    console.log(list)
    return ( 
        <main className="bg-[#ececec] h-screen pt-4 flex flex-col justify-center">
           
           <FormColor setList={setList}/>
           <DisplayColors list={list}/>
        </main>
     );
}
 
export default palett;