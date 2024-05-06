import { useState } from "react";



const SingleColor = ({ hexColor }) => {

    const [copy, setCopy] = useState(false);

    const handleCopy = (color) => () => {
        const colorNew = `#${color}`;
        navigator.clipboard.writeText(colorNew);
        setCopy(true);
        setTimeout(() => {
            setCopy(false);
        }, 2000);
    }

    return ( 
        <div className=" single-card" style={{ backgroundColor: `#${hexColor}` }}>
            <div className="content">
                <button onClick={ handleCopy(hexColor) } className="flex justify-center gap-2">
                <p className="text-font">#{ hexColor }</p>
                    <img src="/link.svg" alt="copy" className="h-6 w-6" />
                </button>
            </div>
            { copy ? <p className="copy-alert text-[#7D7D7D]">#copied</p> : null }
            
        </div>
    );
}
 
export default SingleColor;