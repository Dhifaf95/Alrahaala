import React from 'react';
import  Backimg from "../zainabcompones/Backimg";
import Footer from "../Footer/Footer"

import Comp3bookingcard from "./Comp3bookingcard"
import Comp3data from "./Comp3data"
import IconHeader from '../Iconheader/Iconheader';
const NewPage3 = () => {
    return (
      <div>
          <div className="ZComo3bookpage">
              <IconHeader />
              <Backimg />
              <Comp3data/>
              <Comp3bookingcard/>
            

              <Footer/>
            
    </div>
      </div>
    );
  };
  
  export default NewPage3; 