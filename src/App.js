import React from 'react';
import './App.css';
import Login from './components/Login/Login';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import Korekpage from './components/Korek Mountains,/Korekpage';
// import SearchBar from './components/Service/SearchBar';
// import KorekMountains from './components/Korek Mountains,/KorekMountains';
// import Attractioncard from './components/Attractioncard/Attractioncard';
// import Culture from './components/Culture/Culture';
// import Carsoalculture from './components/Iraqculturelocal/Carsoalculture';
 import Iraqculturelocal from './components/Iraqculturelocal/Iraqculturelocal'

import { Route, Routes } from 'react-router-dom';
// import CustomFooter from './components/Footer/Footer'; // Adjust the path as needed
import Home from './components/Home/Home';  
import Slider from './components/zainabslider/Slider'
import ZainabHom from './components/zainabcompones/ZainabHom';
import Comp1Bookpage from './components/zainabcomp1booking/Comp1Bookpage';
import Comp2Bookpage from './components/zainabcomp2booking/Comp2booking';
import Comp3bookpage from './components/zainabcomp3book/Comp3booking';
import AbbasiPalace from './components/Alabbasy/AbbasiPalace'
// import Header from './components/Header/Header'
// import ImageCarousel from  './components/Korek Mountains,/ImageCarsousel'
import Signup from "./components/Signup/Signup"
//  import Top from './components/Top/Top'
// import Cards from './components/Attractioncard/Cards' ; 

function App() {
  return (
    <div>
      { <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/Slider' element={ <Slider/>} />
        <Route path='/AbbasiPalace' element={ <AbbasiPalace/>} />

        <Route path='/Signup' element={<Signup />} />


        <Route path='/Login' element={<Login />} />
        <Route path="/Iraqculturelocal" element={<Iraqculturelocal/>} />  
        <Route path="/ZainabHom" element={<ZainabHom/>} />  
        <Route path="/Comp1Bookpage" element={<Comp1Bookpage/>} /> 
        <Route path="/Comp2Bookpage" element={<Comp2Bookpage/>} /> 
        <Route path="/Comp3bookpage" element={<Comp3bookpage/>} /> 

       
      </Routes> }
      
      {/* <SearchBar/> */}
      {/* <Login/> */}
      {/* <Carsoalculture/> */}
      {/* <Cards/> */}
      {/* <Header/> */}
      {/* <Iraqculturelocal/> */}
      {/* <ImageCarousel /> */}
      {/* <Attractioncard/> */}
      {/* <KorekMountains/> */}
      {/* <Korekpage/> */}
      {/* <Culture/> */}
      {/* <Top/> */}
    </div>
  );
}

export default App;
