import { useState } from 'react';
import './services.css';
import React, { PureComponent } from 'react';
const Services = () => {
  return (
    <div>
      <div className="topsideservc">
        <h1>Services</h1>
      </div>
      <div className='mainserpg'>
        <div className='leftservpg'>
          <div className='imgserpg'>
            <img src="https://cdn.pixabay.com/photo/2020/05/14/02/31/covid-19-5169689_960_720.jpg" width='300px' height='180px' />
          </div>
          <div className='contserpg'>
            <h2>General</h2>
            
          </div>
        </div>
        <div className='centerservpg'>
          <div className='imgserpg'>
            <img src="https://cdn.pixabay.com/photo/2016/11/06/10/35/hospital-1802679_960_720.jpg" width='300px' height='180px' />
          </div>
          <div className='contserpg'>
            <h2>Emergency</h2>
          
          </div>
        </div>
        <div className='rightservpg'>
          <div className='imgserpg'>
            <img src="https://cdn.pixabay.com/photo/2014/12/10/20/56/medical-563427_960_720.jpg" width='300px' height='180px' />
          </div>
          <div className='contserpg'>
            <h2>Can contact us anytime</h2>
            
          </div>
        </div>
      </div>
      <div className="container">

          <form action="/">
            <label htmlFor="fname" className='formdata'>First Name</label>
            <input type="text" className='formdata' id="fname" name="firstname" placeholder="Your name.." />
            <label className='formdata' htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
              className='formdata'
            />
            <label className='formdata' htmlFor="netid">Netid</label>
            <input
              type="text"
              id="netid"
              name="UTA MAV ID"
              placeholder="Your Student id.."
              className='formdata'
            />
            <label className='formdata' htmlFor="email">Email</label>
            <input className='formdata' type="text" id="email" name="gmail" placeholder="Your email.." />
            <label className='formdata' for="Doctors">Choose an option:</label>
  <select className='formdata' name="option" id="option">
    <option value="none">Regular check-up</option>
    <option value="none">Emergency</option>
    <option value="Women">Women health care(only wednesday)</option>
    <option value="Mohanbabu">Covid Vaccine </option>
    <option value="audi">Booster dose</option>
  </select>
            <label className='formdata' htmlFor="subject">Description</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Description.."
              style={{ height: 200 }}
              defaultValue={""}
              className='formdata'
            />
            <input type="submit" value="Book your appointment" />
          </form>
        </div>
    </div>
  )
}

export default Services
