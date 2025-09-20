import './App.css'
import { useRef } from "react"
import About from './Components/About/About'
import Bottle from './Components/Bottle/Bottle'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import Timelines from './Components/Timelines/Timelines'



function App() {

  const bottleRef = useRef()

  return (
    <>
      <Navbar />
      <Sidebar />
      <Bottle ref={bottleRef}/>
      <Header bottleRef={bottleRef}/>
      <About bottleRef={bottleRef}/>
      <Timelines bottleRef={bottleRef}/>
      <Footer />
    </>
  )
}

export default App
