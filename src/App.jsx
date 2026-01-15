import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Contact from './pages/Contact';
import About from './pages/About';
import Catalog from './pages/Catalog';
import Home from './pages/Home';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';

import Footerbar from './components/Footer';
import Navbar from './components/NavBar';

import GlobalProvider from './State/GlobalProvider';

import './App.css';
// Import all of Bootstrap’s CSS
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <GlobalProvider>
      <BrowserRouter>
      <div className="container-fluid p-0 d-flex flex-column min-vh-100" >
        <Navbar/>
        <main className='py-4 px-4 container'>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/catalog' element={<Catalog/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>

        </Routes>
        </main>
       <Footerbar/> 
      </div>
    </BrowserRouter>
    </GlobalProvider>
    
  )
}

export default App
