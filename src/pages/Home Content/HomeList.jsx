import React from 'react';
import './HomeList.css';
import { Button } from 'react-bootstrap';

const HomeList = () => {
  return (
    <>
      <div className='Homelisttitle'>
        <h5>Our PG in Bengaluru is ready to occupy!</h5>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-6 g-0">
        <div className="homelisting col">
          <div className="card">
            <img
              src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_600/e_improve/e_sharpen:30/f_auto,q_auto/v1657866559/Website/CMS-Uploads/lfgi58gp04lzc5ud6pqe.jpg"
              alt="PG in Bengaluru"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Heavens PG for Boys</h5>
              <h6 className='rentamt'>₹5,000<span className='monthamt'>/month</span></h6>
              <p className="card-subtitle">Bommanahalli</p>
              <span className="tagbadge badge">Boys</span>
              <div className='cardtypesdetail'>
                <p className='bedtype'><i class="fa-solid fa-bed"></i> Bed Type :  Double</p>
              </div>
              <div>
                <div></div>
              </div>
              <div className='cardButtonhome'>
                <Button variant="success" className="custom-button">Book Now</Button>{' '}
                <Button variant="outline-success" className="custom-button-outline">Get CallBack</Button>{' '}
              </div>
            </div>
          </div>
        </div>

        {/* Add more cards here */}
      </div>

      <br></br>
      <br></br>
      <br></br>
    </>
  );
}

export default HomeList;
