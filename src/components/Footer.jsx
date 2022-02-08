import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaMailBulk,
} from 'react-icons/fa';

function Footer() {
  return (
    <div className='-mt-20 md:-mt-10'>
      {/* Wave section */}
      <div className=''>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#2A2A2A'
            fillOpacity='1'
            d='M0,288L0,96L288,96L288,224L576,224L576,160L864,160L864,32L1152,32L1152,192L1440,192L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z'
          ></path>
        </svg>
      </div>

      {/* Footer Contents */}
      <div className='bg-theme w-screen flex justify-center'>
        <div className='md:w-full w-1/2'>
          <div className='p-10 text-center font-mont'>
            <p className='text-gray-50 pb-5'>Designed and Developed by</p>

            <div className='h-1 border-2 border-gray-500 border-dotted'></div>

            <div className='flex text-white w-full justify-between py-3'>
              <FaFacebook />
              <FaInstagram />
              <FaGithub />
              <FaLinkedin />
              <FaMailBulk />
            </div>

            <div className='h-1 border-2 border-gray-500 border-dotted'></div>

            <p className='text-gray-50 my-2'>Chip Taylor</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
