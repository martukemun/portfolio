import React from 'react';
import Layout from '../components/Layout';
import coursesData from '../resources/courses';

function Courses() {
  return (
    <Layout>
      {/* Top page and wave */}
      <div className=''>
        <div className='h-screen'>
          <div className='h-3/4 bg-theme pt-20'>
            <lottie-player
              src='https://assets10.lottiefiles.com/packages/lf20_z01bika0.json'
              background='transparent'
              speed='1'
              autoplay
              loop
            ></lottie-player>
          </div>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
            <path
              fill='#2a2a2a'
              fillOpacity='1'
              d='M0,192L48,165.3C96,139,192,85,288,96C384,107,480,181,576,218.7C672,256,768,256,864,213.3C960,171,1056,85,1152,74.7C1248,64,1344,128,1392,160L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
            ></path>
          </svg>
        </div>
      </div>

      {/* Mission Statment */}
      <div className='mt-20 md:mt-5'>
        <p className='text-xl font-semibold text-center mx-5'>
          "I can't teach people everything I know. The best I can do is position
          them so they can find what they need to know."
        </p>
        <h1 className='text-4xl text-center font-bold mt-5'>BECAUSE</h1>
      </div>
      <div className='font-bold text-center bg-gray-500 text-white mx-20 md:mx-5 p-20 rounded-tl-full rounded-br-full mt-5'>
        <h1 className='text-7xl md:text-3xl'>LEARNING IS...</h1>
        <h1 className='text-7xl md:text-3xl'>CONTINUOUS</h1>
      </div>

      {/* Icons Grid */}
      <div className='grid mt-20 grid-cols-3 md:grid-cols-1 items-center justify-center gap-10 mx-20 md:mx-5 mb-5'>
        {coursesData.map((course) => {
          return (
            <div key={course.key}>
              <div className='border-2 text-center rounded-tr-3xl rounded-bl-3xl border-gray-400 relative overflow-hidden'>
                <img
                  className='w-full max-h-full'
                  src={course.image}
                  alt='Course Icon'
                />
                <div className='absolute inset-0 flex items-center justify-center flex-col opacity-0 bg-black hover:opacity-70'>
                  <h1 className='text-3xl font-semibold text-white'>
                    {course.title}
                  </h1>
                  <button className='border-2 rounded border-white py-2 px-5 mt-5 hover:bg-green-500 text-white'>
                    DEMO
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default Courses;
