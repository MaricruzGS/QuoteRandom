import quoteDB from "./db/quotes.json"
import QuoteBox from "./components/QuoteBox"
import colors from "./db/colors.js"
import { useState } from "react"

function App() {

  const randomQuote = (array) => {
    const randomIndex = Math.floor(array.length * Math.random())
    return array[randomIndex];
  }

  const [quote, setQuote] = useState(randomQuote(quoteDB))
  const [color, setColor] = useState(randomQuote(colors))

  const getNewValue = () => {
    const newQuote = randomQuote(quoteDB)
    const newColor = randomQuote(colors)
    setQuote(newQuote)
    setColor(newColor)
  }

  const backgroundColorObject = {
    backgroundColor: color
  }

  const colorObject = {
    color: color
  }

  return (
    <div className="App" style={backgroundColorObject}>
      <QuoteBox
        quote={quote}
        getNewValue={getNewValue}
        backgroundColorObject={backgroundColorObject}
        colorObject={colorObject}
      />
    </div>
  )
}

export default App
