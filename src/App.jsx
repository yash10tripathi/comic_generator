import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComicStrip from './components/Comicstrip'

function App() {
  // const [count, setCount] = useState(0)
  
  return (
    <>
      <h1>Comic Strip Generator</h1>
      <ComicStrip/>
    </>
  )
}

export default App



