import React from 'react';
import  Backimg from "../zainabcompones/Backimg";
import About  from "../About/About"
import Datacomp from "./Datacomp"
import Footer from "../Footer/Footer"
import Bookingcard from './Comp1Bookingcard';
import IconHeader from '../Iconheader/Iconheader';
function Como1Bookpage() {
  return (
    <div className="ZComo1Bookpage">
      <IconHeader />
      <Backimg />
     <Datacomp/>
     <Bookingcard/>
     <About/>
     <Footer/>


    </div>
  );
}
export default Como1Bookpage;
