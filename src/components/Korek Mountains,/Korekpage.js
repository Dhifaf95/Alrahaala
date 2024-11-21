import React from 'react'
import Carsousel from './ImageCarsousel'
import './korekpage.css'
import image1 from './1.jpg'
import image2 from './3.jpg'
import image3 from './6.jpg'
import image4 from './8.jpg'
import image5 from './9.jpg'
import image6 from './OIP (1).jpg'
import image7 from './OIP (2).jpg'
import image8 from './OIP (3).jpg'
import KorekMountainInfo from './KorekMountainInfo';


function Korekpage() {

    const images = [
        { src: image1, alt: 'Image 1' },
        { src: image2, alt: 'Image 2' },
        { src: image3, alt: 'Image 3' },
        { src: image4, alt: 'Image 4' },
        { src: image5, alt: 'Image 5' },
        { src: image6, alt: 'Image 6' },
        { src: image7, alt: 'Image 7' },
        { src: image8, alt: 'Image 8' },

      ];

      
  return (
    <div className='cover'>
        <div className='cover-content'>
            <h1>Korek Mountains</h1>
            <Carsousel images={images} />
            <KorekMountainInfo />
                 </div>

    </div>

  )


}

export default Korekpage
