import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

import logo from '../../assets/logo.png'
import fbIcon from '../../assets/icons/facebook.png'
import twtIcon from '../../assets/icons/twitter.png'
import igIcon from '../../assets/icons/instagram.png'
import liIcon from '../../assets/icons/linkedin.png'

import { NavLinks } from '../../data/NavLinks.jsx'

import { GrMail } from "react-icons/gr";
import { MdLocationPin } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";

function Footer() {
  return (
    <div className='mt-40 mb-5'>
      <hr className='lg:-mx-44 sm:-mx-0 border-t-2'></hr>
      <a href="" className='inline-block'>
      <img src={logo} alt="logo" className='w-48 mt-20'/>  
      </a>
  
      <div className='my-8'>
        <div className='xl:flex'>
          <div className='xl:w-2/5'>
            <div>
              <p className='font-extrabold text-xl'>Join our newsletter<br></br><span className='text-base'>Get updated on the freshnest news!</span></p>
              <div className='my-9'>
              <form>
              <input type="email" id="email" name="email" placeholder='Email' className='p-3  border-2 border-accent focus:outline-none xl:w-96'></input>
              <input type="button" value="Submit" className='p-3 cursor-pointer border-2 text-white border-accent bg-accent rounded-r-md hover:bg-red-400 hover:border-red-400 font-semibold shadow-sm active:scale-90 transition-transform duration-200'></input>
              </form>
              </div>  
            </div>
          </div>

          <div className='xl:w-3/5 md:flex gap-4'>
            <div className='flex flex-col w-52'>
              <p href="#" className='font-bold text-lg pb-2'>Quick Links</p>
              {NavLinks.map((nav) => (
                <Link key={nav.id} to={nav.link} className='footer-links'>
                  {nav.name}
                </Link>
              ))}
            </div>
            
            <div className=''>
              <h1 className='font-bold text-lg pb-2 w-64'>Opening Hours</h1>
              <p className='font-semibold mb-1 text-gray-500'>Monday: <span className='text-accent'>8:00 AM - 6:00 PM</span></p>
              <p className='font-semibold mb-1 text-gray-500'>Tuesday: <span className='text-accent'>8:00 AM - 6:00 PM</span></p>
              <p className='font-semibold mb-1 text-gray-500'>Wednesday: <span className='text-accent'>8:00 AM - 6:00 PM</span></p>
              <p className='font-semibold mb-1 text-gray-500'>Thursday: <span className='text-accent'>8:00 AM - 6:00 PM</span></p>
              <p className='font-semibold mb-1 text-gray-500'>Friday: <span className='text-accent'>8:00 AM - 6:00 PM</span></p>
              <p className='font-semibold mb-1 text-gray-500'>Saturday: <span className='text-accent'>8:00 AM - 6:00 PM</span></p>
              <p className='font-semibold mb-1 text-gray-500'>Sunday: <span className='text-accent'>CLOSED</span></p>
            </div>

            <div className='flex flex-col '>
              <p className='font-bold text-lg pb-2'>Contacts</p>
              <div className='footer-links flex gap-1'>
                <MdLocationPin className='mt-1 text-2xl'/> 
                <p>2355 Legarda corner Manrique St., Sampaloc, Manila, Manila, Philippines</p>
              </div>

              <div className="footer-links flex gap-1">
                <GrMail className='mt-1 ml-1'/> 
                <p>ncserrano1@yahoo.com</p>
              </div>
              <div className='footer-links flex gap-1'>
                <AiFillPhone className='mt-1 ml-1'/> 
                <p>+63 916 255 5784</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className='border-t-2'></hr>
      <div className='mt-2 grid sm:grid-cols-1 lg:grid-cols-2'>
        <div className=' mt-2 flex font-semibold'>
          <p className='pr-3 sm:text-sm'>2023 ACLC Library.</p>
          <p className='pr-3'>All right reserved.</p>
        </div>

        <div className='flex lg:justify-end sm:justify-start mt-1'>
          <Link to="https://www.facebook.com/profile.php?id=100089871576128">
            <img src={fbIcon} alt="facebookIcon" className='w-10' />
          </Link>
          <Link to="">
            <img src={twtIcon} alt="TwitterIcon" className='w-10' />
          </Link>
          <Link to="">
            <img src={igIcon} alt="InstagramIcon" className='w-10' />
          </Link>
          <Link to="">
            <img src={liIcon} alt="LinkedinIcon" className='w-10' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer 