import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<Home/>}></Route>


      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
