// Import libraries
import {
  Routes,
  Route
} from 'react-router-dom'

import Layout from './components/layout/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='about' element={<About/>} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
