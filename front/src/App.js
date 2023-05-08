import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './component/login/Login';
import Privitrout from './component/login/Privitrout';
import Profile from './component/login/Profile';
import Home from './component/navbar/Home';
import Contact from './component/navbar/Contact';
import Pdf from './component/cards/Pdf';
import AlertError from './component/login/AlertError'
import Success from './component/cards/Success';
import Cancel from './component/cards/Cancel';


function App() {
  return (
    <div className="App">
<AlertError/>
      <Routes>
        
      <Route path='/' element={<Login/>} /> 
        <Route path='/Home' element={
      <Privitrout >
        <Home/>
      </Privitrout>
      } /> 
      <Route path='/Profile' element={
        <Privitrout >
      <Profile/>
      </Privitrout>
      } />
       <Route path='/Contact' element={
        <Privitrout >
      <Contact/>
      </Privitrout>
      } />
    <Route path='/Pdf/:id' element={
        <Privitrout >
      <Pdf/>
      </Privitrout>
      } />
       <Route path="/success" element={
        <Privitrout >
       <Success />
       </Privitrout>
       } /> 
       <Route path="/cancel" element={
         <Privitrout >
       <Cancel />
       </Privitrout>
       } /> 
      
      </Routes>
     
    </div>
  );
}

export default App;
