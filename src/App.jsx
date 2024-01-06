// Import libraries
import {
  Routes,
  Route
} from 'react-router-dom'

import Layout from './components/layout/Layout.jsx'
import Home from './pages/Home.jsx'

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
