import React from 'react'
import Navbar from '../src/Components/Navbar'
import Home from '../src/Components/Home'
import About from '../src/Components/About'
import SocailLinks from './Components/SocailLinks'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [showForm,setShowForm] = React.useState(false)
  return (
    <div>
    <Navbar  showForm={showForm} setShowForm={setShowForm}/>
    <Home  showForm={showForm} setShowForm={setShowForm}/>
    <About/>
    <SocailLinks/>
    <Skills/>
    <Projects/>
    <ToastContainer/>
    </div>
  )
}

export default App
