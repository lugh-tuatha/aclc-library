import React from 'react'
import logo from '../../assets/logo.png'
import fbIcon from '../../assets/icons/facebook.png'
import twtIcon from '../../assets/icons/twitter.png'
import igIcon from '../../assets/icons/instagram.png'
import liIcon from '../../assets/icons/linkedin.png'

function Footer() {
  return (
    <div className='mt-40 pb-20'>
      <hr className='lg:-mx-44 sm:-mx-0 border-t-2'></hr>
   
      <a href="" className='inline-block'>
      <img src={logo} alt="logo" className='w-48 mt-20'/>  
      </a>
  
      <div className='my-14 '>
        <div className='grid sm:grid-cols-1 lg:grid-cols-2'>

        <div className='columns-1'>

          <div>
          <p className='font-extrabold text-xl'>Join our newsletter<br></br><span className='text-base'>Get updated on the freshnest news!</span></p>
          <div className='my-9'>
          <form>
          <input type="email" id="email" name="email" placeholder='Email' className='p-3  border-2 border-accent focus:outline-none lg:w-96'></input>
          <input type="button" value="Submit" className='p-3 cursor-pointer border-2 text-white border-accent bg-accent rounded-r-md hover:bg-red-400 hover:border-red-400 font-semibold shadow-sm active:scale-90 transition-transform duration-200'></input>
          </form>
          </div>  
          </div>
          
        </div>
        <div className='columns-1 flex flex-row justify-evenly'>

    

        <div className='px-4 flex flex-col '>
          <p href="#" className='font-bold text-lg pb-2'>Menu</p>
          <a href="#" className='font-semibold pb-1 text-gray-500 hover:text-primary-100'>Home</a>
          <a href="#" className='font-semibold pb-1 text-gray-500 hover:text-primary-100'>About</a>
          <a href="#" className='font-semibold pb-1 text-gray-500 hover:text-primary-100'>Books</a>
          <a href="#" className='font-semibold pb-1 text-gray-500 hover:text-primary-100'>Blog</a>
        </div>
        <div className='px-4 flex flex-col '>
          <p href="#" className='font-bold text-lg pb-2'>Menu</p>
          <a href="#" className='font-semibold pb-1 text-gray-500 hover:text-primary-100'>Home</a>
          <a href="#" className='font-semibold pb-1 text-gray-500 hover:text-primary-100'>About</a>
          <a href="#" className='font-semibold pb-1 text-gray-500 hover:text-primary-100'>Books</a>
          <a href="#" className='font-semibold pb-1 text-gray-500 hover:text-primary-100'>Blog</a>
        </div>
        <div className='px-4 flex flex-col '>
          <p href="#" className='font-bold text-lg pb-2'>Menu</p>
          <a href="#" className='font-semibold pb-1 text-gray-500 hover:text-primary-100'>Home</a>
          <a href="#" className='font-semibold pb-1 text-gray-500 hover:text-primary-100'>About</a>
          <a href="#" className='font-semibold pb-1 text-gray-500 hover:text-primary-100'>Books</a>
          <a href="#" className='font-semibold pb-1 text-gray-500 hover:text-primary-100'>Blog</a>
        </div>
        <div className='px-4 flex flex-col '>
          <p href="#" className='font-bold text-lg pb-2'>Menu</p>
          <a href="#" className='font-semibold pb-1 text-gray-500 hover:text-primary-100'>Home</a>
          <a href="#" className='font-semibold pb-1 text-gray-500 hover:text-primary-100'>About</a>
          <a href="#" className='font-semibold pb-1 text-gray-500 hover:text-primary-100'>Books</a>
          <a href="#" className='font-semibold pb-1 text-gray-500 hover:text-primary-100'>Blog</a>
        </div>

        </div>

     

        </div>
      </div>
      <hr className='border-t-2'></hr>
      <div className='mt-2 grid sm:grid-cols-1 lg:grid-cols-2'>
        <div className=' mt-2 flex flex-row font-semibold'>
        <p className='pr-3 sm:text-sm'>2023 ACLC Library.</p>
        <p className='pr-3'>All right reserved.</p>
        <a href="#" className='pr-3'>Privacy Policy</a>
        <a href="#" className='pr-3'>Terms of service</a>
        </div>

        <div className='flex flex-row lg:justify-end sm:justify-start mt-1'>
          <a href="#"><img src={fbIcon} alt="facebookIcon" className='w-10'></img></a>
          <a href="#"><img src={twtIcon} alt="TwitterIcon" className='w-10'></img></a>
          <a href="#"><img src={igIcon} alt="InstagramIcon" className='w-10'></img></a>
          <a href="#"><img src={liIcon} alt="LinkedinIcon" className='w-10'></img></a>

        </div>

      </div>
      
    </div>
 
  )
}

export default Footer 