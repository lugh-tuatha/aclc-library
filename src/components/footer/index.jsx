import React from 'react'
import logo from '../../assets/logo.png'
import fbIcon from '../../assets/icons/facebook.png'
import twtIcon from '../../assets/icons/twitter.png'
import igIcon from '../../assets/icons/instagram.png'
import liIcon from '../../assets/icons/linkedin.png'

function Footer() {
  return (
    <div className='mt-40 pb-10'>
      <hr className='lg:-mx-44 sm:-mx-0 border-t-2'></hr>
   
      <a href="" className='inline-block'>
      <img src={logo} alt="logo" className='w-48 mt-20'/>  
      </a>
  
      <div className='my-10 '>
        <div className='grid sm:grid-cols-1 lg:grid-cols-2'>

        <div className='columns-1'>

          <div>
          <p className='font-extrabold text-xl'>Join our newsletter<br></br><span className='text-base'>Get updated on the freshnest news!</span></p>
          <div className='my-5'>
          <form>
          <input type="email" id="email" name="email" placeholder='Email' className='p-2 lg:p-3  border-2 border-accent focus:outline-none w-64 lg:w-80 '></input>
          <input type="button" value="Submit" className='p-2   lg:p-3 cursor-pointer border-2 text-white border-accent bg-accent rounded-r-md hover:bg-red-400 hover:border-red-400 font-semibold shadow-sm active:scale-90 transition-transform duration-200'></input>
          </form>
          </div>  
          </div>
          
        </div>
        <div className='columns-1 flex flex-row justify-start lg:justify-evenly'>

    

        <div className='px-4 flex flex-col '>
          <p href="#" className='font-bold text-base lg:text-lg pb-2'>Menu</p>
          <a href="#" className='font-semibold pb-1 text-gray-500 hover:text-primary-100 text-sm lg:text-base'>Home</a>
          <a href="#" className='font-semibold pb-1 text-gray-500 hover:text-primary-100 text-sm lg:text-base'>About</a>
          <a href="#" className='font-semibold pb-1 text-gray-500 hover:text-primary-100 text-sm lg:text-base'>Books</a>
          <a href="#" className='font-semibold pb-1 text-gray-500 hover:text-primary-100 text-sm lg:text-base'>Blog</a>
        </div>
        <div className='px-4 flex flex-col '>
        <p href="#" className='font-bold text-base lg:text-lg pb-2'>Menu</p>
        <a href="#" className='font-semibold pb-1 text-gray-500 hover:text-primary-100 text-sm lg:text-base'>Home</a>
          <a href="#" className='font-semibold pb-1 text-gray-500 hover:text-primary-100 text-sm lg:text-base'>About</a>
          <a href="#" className='font-semibold pb-1 text-gray-500 hover:text-primary-100 text-sm lg:text-base'>Books</a>
          <a href="#" className='font-semibold pb-1 text-gray-500 hover:text-primary-100 text-sm lg:text-base'>Blog</a>
        </div>
        <div className='px-4 flex flex-col '>
        <p href="#" className='font-bold text-base lg:text-lg pb-2'>Menu</p>
        <a href="#" className='font-semibold pb-1 text-gray-500 hover:text-primary-100 text-sm lg:text-base'>Home</a>
          <a href="#" className='font-semibold pb-1 text-gray-500 hover:text-primary-100 text-sm lg:text-base'>About</a>
          <a href="#" className='font-semibold pb-1 text-gray-500 hover:text-primary-100 text-sm lg:text-base'>Books</a>
          <a href="#" className='font-semibold pb-1 text-gray-500 hover:text-primary-100 text-sm lg:text-base'>Blog</a>
        </div>
        <div className='px-4 flex flex-col '>
        <p href="#" className='font-bold text-base lg:text-lg pb-2'>Menu</p>
        <a href="#" className='font-semibold pb-1 text-gray-500 hover:text-primary-100 text-sm lg:text-base'>Home</a>
          <a href="#" className='font-semibold pb-1 text-gray-500 hover:text-primary-100 text-sm lg:text-base'>About</a>
          <a href="#" className='font-semibold pb-1 text-gray-500 hover:text-primary-100 text-sm lg:text-base'>Books</a>
          <a href="#" className='font-semibold pb-1 text-gray-500 hover:text-primary-100 text-sm lg:text-base'>Blog</a>
        </div>

        </div>

     

        </div>
      </div>
      <hr className='border-t-2'></hr>
      <div className='mt-1 grid sm:grid-cols-1 lg:grid-cols-2'>
        <div className=' mt-1 flex flex-row font-semibold justify-evenly lg:justify-normal'>
        <p className='text-xs lg:text-base lg:pr-3 tracking-tighter'>2023 ACLC Library.</p>
        <p className='text-xs lg:text-base lg:pr-3 tracking-tighter'>All right reserved.</p>
        <a href="#" className='text-xs lg:text-base lg:pr-3 tracking-tighter hover:underline hover:underline'>Privacy Policy</a>
        <a href="#" className='text-xs lg:text-base lg:pr-3 tracking-tighter hover:underline'>Terms of service</a>
        </div>

        <div className='flex flex-row lg:justify-end sm:justify-start mt-2 lg:mt-1'>
          <a href="#"><img src={fbIcon} alt="facebookIcon" className='w-7 lg:w-10'></img></a>
          <a href="#"><img src={twtIcon} alt="TwitterIcon" className='w-7 lg:w-10'></img></a>
          <a href="#"><img src={igIcon} alt="InstagramIcon" className='w-7 lg:w-10'></img></a>
          <a href="#"><img src={liIcon} alt="LinkedinIcon" className='w-7 lg:w-10'></img></a>

        </div>

      </div>
      
    </div>
  

  )
}

export default Footer 