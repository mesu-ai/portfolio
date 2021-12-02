import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navigation/Navbar';

import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import NotFind from './pages/notfound/NotFound';
import Footer from './pages/footer/Footer';
import Blog from './pages/blog/Blog';
import Login from './pages/login/Login';
import Services from './pages/services/Services';
import ProjectDetails from './pages/projects/projectDetails/ProjectDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/service' element={<Services/>}></Route>
        <Route path='/project' element={<Projects/>}></Route>
        <Route path='/projectdetails/:id' element={<ProjectDetails/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='*' element={<NotFind/>}></Route>
        


      </Routes>
      <Footer></Footer>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
