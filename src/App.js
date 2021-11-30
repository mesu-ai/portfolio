import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navigation/Navbar';
import Service from './pages/service/Service';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import NotFind from './pages/notfound/NotFound';
import Footer from './pages/footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
        <Route path='/project' element={<Projects/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='*' element={<NotFind/>}></Route>
        


      </Routes>
      <Footer></Footer>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
