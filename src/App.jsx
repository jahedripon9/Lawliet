
import './App.css'
import Footer from './Pages/Footer/Footer'
import Home from './Pages/Home/Home'
import { Nav } from './Pages/NavBar/Navbar'

function App() {
  

  return (
    <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
    <Nav />
      <Home />
     <Footer />
    </div>
  )
}

export default App
