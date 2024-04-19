
import { TYPOGRAPHY, type Typography } from '../constants'
import Select from "react-select"

type Props = {
  fontSize: number
  fontFamily: Typography
  setFontSize: (fontSize: number) => void
  onFontChange: (typography: Typography) => void
}

export const FontSizeSlider = (props: Props) => {
  const { fontSize, fontFamily, setFontSize, onFontChange } = props

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = parseInt(e.target.value, 10)
    setFontSize(newSize)
  }
  const fontOptions = [
    { value: TYPOGRAPHY.INTER, label: 'Inter' },
    { value: TYPOGRAPHY.ROBOTO, label: 'Roboto' },
    
 ];



 

  return (
    <>
      <div className="grid">
        <div className="relative w-full flex items-center rounded-lg">
        <Select
            onChange={(selectedOption) => {
              
              if (selectedOption && typeof selectedOption.value === 'string') {
                const typographyValue = selectedOption.value as Typography;
                onFontChange(typographyValue);
              }
            }}
            value={fontOptions.find(option => option.value === fontFamily)}
            options={fontOptions}
            styles={{
              control: (styles) => ({
                ...styles,
                backgroundColor: 'white',
                borderColor:'transparent',
                boxShadow: 'none',
                color:'#7D7D7D',
                '&:hover': {
                 borderBlockWidth:'1px'
                },
              }),
              option: (base) => ({
                ...base,
                borderColor:'transparent',
                backgroundColor: '#fff',
                color: '#7D7D7D',
                '&:hover': {
                  color:'#3838c7',
                }
                
              }),
              
            }}
            className="w-full font-medium "
          />
           
          
          
        </div>
      </div>
      <div className="flex justify-between items-center font-semibold mb-4 text-[24px]">
        <label>
          <p className="text-[24px] text-[#7D7D7D]">font-size</p>
        </label>
        <p className="p-2 text-[#7D7D7D] bg-white rounded-lg flex items-center justify-center w-[64px] h-[40px]">
          {fontSize}
        </p>
      </div>
      <div className="grid place-items-center">
        <input
          type="range" 
          min="8"
          max="72"
          value={fontSize}
          onChange={handleFontSizeChange}
          className=" inputStyle custom-slider bg-transparent appearance-none cursor-pointer w-60"
        />
      </div>
    </>
  )
}