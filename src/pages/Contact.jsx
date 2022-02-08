import React from 'react';
import Layout from '../components/Layout';

function Contact() {
  return (
    <Layout>
      <div>
        {/* Email animation */}
        <div className='h-screen'>
          <lottie-player
            src='https://assets10.lottiefiles.com/packages/lf20_5wljrtm0.json'
            background='transparent'
            speed='1'
            loop
            autoplay
          ></lottie-player>
        </div>

        {/* Contact Frm */}
        <div className='w-screen flex justify-center'>
          <div className='md:w-full w-1/2 p-10 shadow-2xl bg-gray-50 -mt-20'>
            <h1 className='text-2xl font-semibold'>Contact Me</h1>
            <input
              type='text'
              className='w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5'
              placeholder='Name'
            />
            <input
              type='text'
              className='w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5'
              placeholder='Email'
            />
            <textarea
              type='text'
              className='w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5'
              placeholder='Query'
            />
            <button
              type='submit'
              className='bg-red-500 rounded text-white px-5 py-1 mt-3'
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
