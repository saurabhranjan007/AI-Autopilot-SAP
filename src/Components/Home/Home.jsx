import React from 'react';
import './home.style.css'
import { Link } from 'react-router-dom';

const HomePage = () => {

    const vendor_customer = 'https://yourfinancebook.com/wp-content/uploads/2013/11/Customer-and-vendor-master.jpg'
    const sap_support = 'https://approyo.com/images/service-icon3_2.png'
    const business_owner = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSslEdAuAAIX8amJcyC9ErRqk2VmIMeAvNYcqRo8d42gyGvPcw0L0DEDzemoocPzXOIv_4&usqp=CAU'

  return (
    <div className="home-page">
      <h1>Welcome to AI Auto Pilot for SAP</h1>
      <h4>Select Your Persona</h4>
      <div className="box-container">
        <Link className="box" to='/customer'>
          <img 
            src={vendor_customer}
            alt="Vendor/Customer" />
          <h2>Vendor/Customer</h2>
        </Link>
        <div className="box">
          <img 
            src={sap_support}
            alt="SAP Support Team" />
          <h2>SAP Support Team</h2>
        </div>
        <div className="box">
          <img 
            src={business_owner}
            alt="Business User" />
          <h2>Business User</h2>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
