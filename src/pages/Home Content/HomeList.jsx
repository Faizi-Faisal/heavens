import React, { useState } from 'react';
import './HomeList.css';
import { Badge, Button, Modal } from 'react-bootstrap';

const HomeList = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handleCloseModal = () => {
    setShowModal(false);
    setName('');
    setPhoneNumber('');
    setNameError('');
    setPhoneError('');
  };

  const handleShowModal = () => setShowModal(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNameEmpty = !name.trim();
    const isPhoneEmpty = !phoneNumber.trim();
    const isPhoneInvalid = !isPhoneEmpty && !/^\d+$/.test(phoneNumber);
    const isPhoneIncorrectLength = phoneNumber.length !== 10;

    setNameError(isNameEmpty ? 'Please enter your name' : '');
    setPhoneError(isPhoneEmpty ? 'Please enter your phone number' : isPhoneInvalid ? 'Please enter a valid phone number' : isPhoneIncorrectLength ? 'Phone number must be 10 digits' : '');

    if (isNameEmpty || isPhoneEmpty || isPhoneInvalid || isPhoneIncorrectLength) {
      return;
    }

    // Perform further actions if validation passes
    console.log('Name:', name);
    console.log('Phone Number:', phoneNumber);
    handleCloseModal();
  };

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
              <h6 className='rentamt'><span className='monthamt'><i className="fa-solid fa-route"></i> View Direction</span></h6>
              <p className="card-subtitle">Bommanahalli</p>
              <span className="tagbadge badge">Boys <i className="fa-solid fa-person"></i></span>
              <div className='cardtypesdetail'>
                <p className='bedtype'><i className="fa-solid fa-bed"></i> Bed Type :  Double</p>
              </div>
              <div className='aminitiesbadge'>
                <Badge pill bg="success" className='badgewifi'> <i className="fa-solid fa-wifi"></i> Wifi &nbsp;</Badge>{' '}
                <Badge pill bg="warning"><i className="fa-solid fa-bath"></i> Attached Washroom</Badge>{' '}
              </div>
              <div className='cardButtonhome'>
                <h4 className='rentamountcard'>₹5,000<span className='rentamountmonth'>/month</span></h4>
                <Button variant="outline-success" className="custom-button-outline" onClick={handleShowModal}>Get CallBack</Button>{' '}
              </div>
            </div>
          </div>
        </div>

        {/* Add more cards here */}
      </div>

      <br></br>
      <br></br>
      <br></br>

      <Modal show={showModal} onHide={handleCloseModal} centered>
  <Modal.Header closeButton>
  </Modal.Header>
  <Modal.Body>
    <form onSubmit={handleSubmit}>
      <div className='boxerbox'>
        <div className='detailbox'>
          <input 
            type="text" 
            placeholder="Enter your name" 
            className={`form-control mb-3 ${nameError ? 'is-invalid' : ''}`} 
            style={{ backgroundColor: 'white' }} 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          {nameError && <div className="invalid-feedback">{nameError}</div>}
          <div className="input-group">
            <span className="input-group-text" style={{ backgroundColor: 'white' }}>+91</span>
            <input 
              type="text" 
              placeholder="Enter your phone number" 
              className={`form-control ${phoneError ? 'is-invalid' : ''}`} 
              style={{ backgroundColor: 'white' }} 
              value={phoneNumber} 
              onChange={(e) => setPhoneNumber(e.target.value)} 
            />
          </div>
          {phoneError && <div className="invalid-feedback">{phoneError}</div>}

        </div>
      </div>
      <div className='text-center'>
        <button type="submit" className="btn btn-primary mt-3">Save Changes</button>
      </div>
    </form>
    </Modal.Body>
    </Modal>


    </>
  );
}

export default HomeList;
