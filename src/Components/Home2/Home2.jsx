import React from 'react';
import { Link } from 'react-router-dom'
import './home2.style.css'

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to AI Auto Pilot for SAP</h1>
      <h4>Vendor/Customer</h4>
      <div className="box-container">
        <div className="box">
          <h2>PO Status Enquiry</h2>
        </div>
        <div className="box">
          <h2>Pricing and Availability</h2>
        </div>
        <div className="box">
          <h2>Shipment Information</h2>
        </div>
        <div className="box">
          <h2>Invoice Processing Status</h2>
        </div>
        <div className="box">
          <h2>Sales Order Status</h2>
        </div>
        <div className="box">
          <h2>Vendor and Customer Master Update Request</h2>
        </div>
        <div className="box">
          <h2>Submit an Invoice</h2>
        </div>
        <div className="box">
          <h2>Submit a Quote</h2>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
