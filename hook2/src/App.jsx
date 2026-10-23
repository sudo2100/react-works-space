import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import UseRefEx from './components/UseRefEx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="app">
        <h2>성능 최적화 및 전역 관리</h2>
        <UseRefEx />
      </section>
    </>
  )
}

export default App
