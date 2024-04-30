import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './HomeCarousel.css'

const HomeCarousel = () => {
  return (
   <div className='HomeCarousel Container'>
     <Carousel fade controls={true} className="Citem">
      <Carousel.Item>
        <img className="d-block w-100" src="https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fstanza-living%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1688556582%2FWebsite%2FCMS-Uploads%2FWeb_Banner_03_Desktop_3_mknpwg.png&w=1920&q=75" alt="First slide" />
    </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fstanza-living%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1688556552%2FWebsite%2FCMS-Uploads%2FWeb_Banner_03_Desktop_1_vzb4dj.png&w=1920&q=75" alt="Second slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fstanza-living%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1688556616%2FWebsite%2FCMS-Uploads%2FWeb_Banner_Desktop_2_fukrjc.png&w=1920&q=75" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
   </div>
  );
};

export default HomeCarousel;
