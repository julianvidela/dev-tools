import SingleColor from "./singleColor"



const DisplayColors = ({ list }) => {
    return ( 
        <div
       
        className="grid grid-col-1  lg:grid-cols-5 p-1 gap-1 w-full">
            {
                list.map((color, index) => (
                    

                    
                    <SingleColor key={index} hexColor={color.hex}/>

                    
                ))
            }
        </div>
    );
}
 
export default DisplayColors;