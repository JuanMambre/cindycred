import './App.css'
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import Contact from './Components/Contact'
import About from './Components/About'
import Preguntas from './Components/Preguntas'

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Preguntas />
      <Contact />
    </div>
  )
}

export default App
