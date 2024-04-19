import SingleColor from "./singleColor"



const DisplayColors = ({ list }) => {
    return ( 
        <div
       
         className="colors-box p-16">
            {
                list.map((color, index) => (
                    

                    
                    <SingleColor key={index} hexColor={color.hex}/>

                    
                ))
            }
        </div>
    );
}
 
export default DisplayColors;