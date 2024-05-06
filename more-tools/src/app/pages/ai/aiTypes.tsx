"use client"


interface Props{
    name?: string | undefined,
    imgUrl?: string | undefined,
    linkUrl?: string | undefined,
    descrip?: string | undefined,
  

}

const aiTypes: React.FC<Props> = ({
     name = "chat Gpt",
     imgUrl = "/link",
     linkUrl = "/kkl",
     descrip = "lorem hola tha do let go",

}) =>{
    return (
        <main className="h-[28.4rem] rounded-3xl overflow-hidden bg-black">
        <div>
           <h2>{name}</h2>
        </div>
    </main>
    )

};export default aiTypes;
