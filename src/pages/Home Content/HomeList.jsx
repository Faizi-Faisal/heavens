import React from 'react';
import './HomeList.css';

const HomeList = () => {
  return (
    <>
      <div className='Homelisttitle'>
        <h5>Our PG in Bengaluru is ready to occupy!</h5>
      </div>
      <div className="homelisting">
        <div className="card">
          <img src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_600/e_improve/e_sharpen:30/f_auto,q_auto/v1657866559/Website/CMS-Uploads/lfgi58gp04lzc5ud6pqe.jpg" 
          alt="PG in Bengaluru" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Heavens PG for Boys</h5>
            <p className="card-subtitle">Bommanahalli</p>
            <span className="badge">Boys</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeList;
