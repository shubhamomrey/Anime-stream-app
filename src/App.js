import './App.css';
import Homepage from './pages/Homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './pages/Signin';
import Signup from './pages/Signup';


function App() {
  return (
    <BrowserRouter >
    
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
     
    </Routes>
     
    </BrowserRouter>
  );
}

export default App;
