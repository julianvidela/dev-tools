"use client"
import { useState } from "react";
import FormColor from "./formColor";
import Values from "values.js"
import DisplayColors from "./displayColors"





const palett = () => {
    const [list, setList] = useState(new Values("blue").all(8));
    console.log(list)
    return ( 
        <main className="w-full h-full flex flex-col justify-center p-5 mt-10">

           
           <FormColor setList={setList}/>
           

           <DisplayColors list={list}/>
           
        </main>
     );
}
 
export default palett;