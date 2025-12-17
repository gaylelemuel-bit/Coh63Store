import './App.css';
import Footerbar from './components/Footer';
import Navbar from './components/NavBar';
import Catalog from './pages/Catalog';
// Import all of Bootstrap’s CSS
import 'bootstrap/dist/css/bootstrap.min.css';






function App() {

  return (
    <>
      <div className="container-fluid p-0 d-flex flex-column min-vh-100" >
        <Navbar/>
       <main className="flex-grow-1"> 
        <Catalog/>
      </main>
        <Footerbar/>
      </div>
      
    </>
  )
}

export default App
