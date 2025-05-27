// Import libraries
import { useRef } from 'react'
import { Routes, Route } from 'react-router-dom'


import Layout from './components/layout/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Resume from './pages/Resume.jsx'
import Contact from './pages/Contact.jsx'

function App() {

    // Create references for each section
    const home = useRef(null);
    const about = useRef(null);
    const projects = useRef(null);
    const resume = useRef(null);
    const contact = useRef(null);

    const sectionRefs = {
      home,
      about,
      projects,
      resume,
      contact
    };

    const mainPage = (
      <main>
        <div ref={home}><Home /></div>
        <div ref={about}><About /></div>
        <div ref={projects}><Projects /></div>
        <div ref={resume}><Resume /></div>
        <div ref={contact}><Contact /></div>
      </main>
    );

  return (
    <div className='app'>
      <Routes>
      <Route path='/' element={<Layout sectionRefs={sectionRefs} />}>
        <Route index element={mainPage} />
        <Route path='about' element={mainPage} />
        <Route path='projects' element={mainPage} />
        <Route path='resume' element={mainPage} />
        <Route path='contact' element={mainPage} />
      </Route>
      </Routes>
    </div>
  )
}

export default App
