import React from 'react';
import "../zainabsours/css/Datacomp.css"
import complogo2 from "../zainabsours/imges/complogo2.jpg";
import map from  "../zainabsours/imges/map.png"


  

function Datacomp2() {

    
    const handleClick = () => {
       
        window.location.href = 'https://maps.app.goo.gl/5DEbhfmMJbjsYtYR7';
    };
    
    return(
     <div className="Datacomp">
         <div className="contaner">
         <div className="compnname">
             <h1>Raq Adventures</h1>
             <p className="p">Iraq Adventures offers packages for historical exploration and outdoor activities, including hiking in the Hamrin Mountains. Their tours cover cultural and adventure destinations throughout Iraq.</p>
         </div>

         <div className="map"> 
             <img src={map}  alt="map"  style={{ cursor: 'pointer' }} onClick={handleClick} width="100%"/>
         </div>


         <div className="socal">
             <div class="socalcard">
                <a class="socialContainer containerOne" href="https://www.instagram.com/rockyroadtravel/">
                <svg viewBox="0 0 16 16" class="socialSvg instagramSvg">
                <path
                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                ></path>
                </svg>
                </a>

                <a class="socialContainer containerTwo" href="https://twitter.com/RockyRoadTravel">
                <svg viewBox="0 0 24 24" class="socialSvg twitterSvg">
                <g>
                <polygon points="12.153992,10.729553 8.088684,5.041199 5.92041,5.041199 10.956299,12.087097 11.59021,12.97345    15.900635,19.009583 18.068909,19.009583 12.785217,11.615906  "/>
                <path d="M21.15979,1H2.84021C1.823853,1,1,1.823853,1,2.84021v18.31958C1,22.176147,1.823853,23,2.84021,23h18.31958   C22.176147,23,23,22.176147,23,21.15979V2.84021C23,1.823853,22.176147,1,21.15979,1z M15.235352,20l-4.362549-6.213013   L5.411438,20H4l6.246887-7.104675L4,4h4.764648l4.130127,5.881958L18.06958,4h1.411377l-5.95697,6.775635L20,20H15.235352z"/>
                </g>
                </svg>
                </a>

                
                <a class="socialContainer containerFour" href="https://www.facebook.com/rockyroadtravel/">
                <svg height="30px" version="1.1" viewBox="0 0 50 50" width="30px" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
                <g fill="#FFFFFF" id="Facebook">
                <path d="M25,50 C38.8071194,50 50,38.8071194 50,25 C50,11.1928806 38.8071194,0 25,0 C11.1928806,0 0,11.1928806 0,25 C0,38.8071194 11.1928806,50 25,50 Z M25,47 C37.1502651,47 47,37.1502651 47,25 C47,12.8497349 37.1502651,3 25,3 C12.8497349,3 3,12.8497349 3,25 C3,37.1502651 12.8497349,47 25,47 Z M26.8145197,36 L26.8145197,24.998712 L30.0687449,24.998712 L30.5,21.2076072 L26.8145197,21.2076072 L26.8200486,19.3101227 C26.8200486,18.3213442 26.9207209,17.7915341 28.4425538,17.7915341 L30.4769629,17.7915341 L30.4769629,14 L27.2222769,14 C23.3128757,14 21.9368678,15.8390937 21.9368678,18.9318709 L21.9368678,21.2080366 L19.5,21.2080366 L19.5,24.9991413 L21.9368678,24.9991413 L21.9368678,36 L26.8145197,36 Z M26.8145197,36"/>
                </g>
                </g>
                </svg>
                </a>


              </div>

         </div>

         </div>
     
         <div className="compimg">
         <img className="comp01" src={complogo2} width="120%" height="75%" />
         </div>
    
       
     </div>
    );
}

export default Datacomp2;
