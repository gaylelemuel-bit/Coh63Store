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
import Cart from "./pages/Cart";
import CareerPage from './pages/CareerPage';
import TermsOfService from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ShippingAndRefund from './pages/Shipping';
import FaqPage from './pages/FAQ';
import SizeGuide from './pages/SizeGudie';
import { useState } from 'react';


function App() {
  const [applications, setApplications] = useState([
  {
    fullName: "Jenny craig",
    email: "Jenny.criag@example.com",
    jobTitle: "Social Media & Content Specialist",
    portfolio: "https://www.figma.com/community/file/1299737213921915682/portfolio-product-designer-portfolio-website",
    date: "Jan 19, 2026"
  }
]);



  return (
    
    <GlobalProvider >
      <BrowserRouter>
        <Navbar/>
        <main className='bg-primary-subtle me-1 pe-5 pb-5 container-fluid min-vh-100 vw-100 '> 
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/catalog' element={<Catalog/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/admin' element={<Admin applications={applications}/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/careers' element={<CareerPage setApplications={setApplications} applications={applications} />}></Route>
        <Route path='/terms' element={<TermsOfService/>}></Route>
        <Route path='/privacy' element={<PrivacyPolicy/>}></Route>
        <Route path='/shipping' element={<ShippingAndRefund/>}></Route>
        <Route path='faq' element={<FaqPage/>}></Route>
        <Route path='/size-guide' element={<SizeGuide/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
        </Routes>
        </main>
       <Footerbar/> 
    </BrowserRouter>
    </GlobalProvider>
    
  )
}

export default App
