"use client"
import { useState } from 'react'
import "./line.css"

import { Toaster } from 'react-hot-toast'
import { showToast } from './CustomToast'
import { calculateLineHeight } from '../../components/ui/lib/utils'

import { StringTemplate } from './components/StringTemplate'
import { Title } from './components/title'
import { Button } from './components/common/Button'
import { FontSizeSlider } from './components/FontSizeSlider'
import { TYPOGRAPHY, type Typography } from './constants'

function App() {
  const [fontSize, setFontSize] = useState(16)
  const [currentString, setCurrentString] = useState<Array<string>>([])
  const [fontFamily, setFontFamily] = useState<Typography>(TYPOGRAPHY.INTER)

  const handleKeyPress = (event: KeyboardEvent) => {
    const keyPressed: string = event.key.toLowerCase()
    console.log(currentString.join(''))
    if (currentString.length >= 8) {
      currentString.shift()
    }
    setCurrentString([...currentString, keyPressed])
  }

  const handleChangeTypography = (typography: Typography) => {
    setFontFamily(typography)
  }

 

  const generateCode = () => {
    const code = `font-size: ${fontSize}px; line-height: ${lineHeight.toFixed(
      2
    )};`
    navigator.clipboard.writeText(code)
    showToast(code)
  }

  const { lineHeight } = calculateLineHeight(fontSize)
  

  return (
    <>
      <main className="flex-1 w-full h-full flex flex-col justify-center items-center overflow-hidden gap-8">
        <Title />
        <section className="grid grid-cols-2  gap-x-24 max-w-5xl mx-auto overflow-hidden w-full items-center">
          <article className="w-full space-y-8">
            <FontSizeSlider
              fontSize={fontSize}
              fontFamily={fontFamily}
              setFontSize={setFontSize}
              onFontChange={handleChangeTypography}
            />

            <div className="flex justify-between items-center font-semibold my-4 text-[24px]">
              <p className="text-[24px] text-[#7D7D7D]">Line-height</p>
              <p className="p-2 text-[#7D7D7D] bg-white rounded-lg flex items-center justify-center w-[64px] h-[40px]">
                {lineHeight.toFixed(2)}
              </p>
            </div>

            <div className="flex w-full justify-center">
              <Button onClick={generateCode}>Copy CSS</Button>
            </div>
          </article>
          <StringTemplate fontSize={fontSize} fontFamily={fontFamily} />
        </section>
      </main>
      
      <Toaster />
    </>
  )
}

export default App