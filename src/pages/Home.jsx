import React from 'react';
import Layout from '../components/Layout';
import {
  FaReact,
  FaAngular,
  FaJava,
  FaNodeJs,
  FaBootstrap,
  FaHtml5,
  FaCss3,
  FaJsSquare,
} from 'react-icons/fa';
import AOS from 'aos';

AOS.init({
  duration: 1000,
});

function Home() {
  return (
    <Layout>
      <div>
        {/* Full page intro section */}
        <div className='h-screen bg-theme'>
          <div className='grid bg-theme md:grid-cols-1 grid-cols-2 h-screen items-center border-4 md:border-0 border-white mx-10 z-10 transform rotate-12 md:rotate-0'>
            <div className='h-1/2'>
              <lottie-player
                src='https://assets2.lottiefiles.com/packages/lf20_kkflmtur.json'
                background='transparent'
                speed='1'
                loop
                autoplay
              ></lottie-player>
            </div>

            <div className='font-bold text-white md:px-5'>
              <h1 className='text-7xl md:text-4xl' data-aos='slide-right'>
                Hi, I am <b className='text-yellow-500'>CHIP</b>
              </h1>
              <h1 className='text-4xl md:text-xl' data-aos='slide-left'>
                FullStack <b className='text-red-500'>Developer</b> / Guru
              </h1>
            </div>
          </div>
        </div>

        {/* Technologies icons */}
        <div className='mt-20'>
          <h1 className='text-4xl text-blue-800 font-bold text-center my-8'>
            Technologies I USE
          </h1>
          <div className='grid md:grid-cols-1 grid-cols-4'>
            <FaReact
              size={180}
              color='cyan'
              className='w-full text-center mt-20'
            />
            <FaAngular
              size={180}
              color='red'
              className='w-full text-center mt-20 animate-bounce'
            />
            <FaJava
              size={180}
              color='orange'
              className='w-full text-center mt-20 animate-bounce'
            />
            <FaNodeJs
              size={180}
              color='green'
              className='w-full text-center mt-20'
            />
            <FaBootstrap
              size={180}
              color='blue'
              className='w-full text-center mt-20 animate-bounce'
            />
            <FaJsSquare
              size={180}
              color='green'
              className='w-full text-center mt-20'
            />
            <FaHtml5
              size={180}
              color='orange'
              className='w-full text-center mt-20'
            />
            <FaCss3
              size={180}
              color='cadetblue'
              className='w-full text-center mt-20'
            />
          </div>
        </div>

        {/* Javascript section */}
        <div className='my-20'>
          <div className='text-center h-52 bg-primary'>
            <h1 className='text-white font-bold text-3xl py-10'>
              Javascript? What's that???
            </h1>
          </div>

          <div className='-mt-20 md:mx-5 mx-32 shadow-2xl bg-gray-50 rounded-lg hover:bg-gray-500 hover:text-white'>
            <div className='h-96' data-aos='zoom-in'>
              <lottie-player
                src='https://assets2.lottiefiles.com/packages/lf20_sSF6EG.json'
                background='transparent'
                speed='1'
                autoplay
              ></lottie-player>
            </div>
            <p className='text-xl my-5 font-semibold md:px-5 px-14 py-10 text-center'>
              Javascript is one of the most powerful programming languages
              because of its application across wide range of platforms.
            </p>
          </div>
        </div>

        {/* Devstack section */}
        <div className='my-20'>
          <div className='text-center h-52 bg-orange-400'>
            <h1 className='text-white font-bold text-3xl py-10'>
              My DEV Stack
            </h1>
          </div>

          <div className='-mt-20 md:mx-5 mx-32 shadow-2xl bg-gray-50 rounded-lg hover:bg-gray-500 hover:text-white'>
            <div className='h-96' data-aos='zoom-in'>
              <lottie-player
                src='https://assets5.lottiefiles.com/packages/lf20_o47mbvnx.json'
                background='transparent'
                speed='1'
                autoplay
                loop
              ></lottie-player>
            </div>

            <div className='grid md:grid-cols-1 grid-cols-3 p-5'>
              <div className='text-left'>
                <h1 className='text-bold text-xl mt-1'>Front End</h1>
                <hr />
                <p className='font-semibold mt-2'>HTML/CSS</p>
                <p className='font-semibold mt-2'>React</p>
                <p className='font-semibold mt-2'>Javascript</p>
                <p className='font-semibold mt-2'>Angular</p>
                <p className='font-semibold mt-2'>Redux</p>
              </div>

              <div className='text-center'>
                <h1 className='text-bold text-xl  mt-1'>UI / UX</h1>
                <hr />
                <p className='font-semibold mt-2'>Bootstrap</p>
                <p className='font-semibold mt-2'>Tailwind</p>
                <p className='font-semibold mt-2'>Ant Design</p>
                <p className='font-semibold mt-2'>MaterialUI</p>
                <p className='font-semibold mt-2'>SemanticUI</p>
              </div>

              <div className='text-right'>
                <h1 className='text-bold text-xl  mt-1'>Back End / DB</h1>
                <hr />
                <p className='font-semibold mt-2'>Node JS</p>
                <p className='font-semibold mt-2'>Express JS</p>
                <p className='font-semibold mt-2'>PHP</p>
                <p className='font-semibold mt-2'>My SQL</p>
                <p className='font-semibold mt-2'>Mongo DB</p>
              </div>
            </div>
          </div>
        </div>

        {/* Who is Chip */}
        <div>
          <h1 className='text-4xl text-gray-800 text-center font-bold'>
            Who is CHIP?
          </h1>
          <div className='h-screen relative text-gray-500'>
            <div className='h-full'>
              <lottie-player
                src='https://assets3.lottiefiles.com/packages/lf20_gsp8bvo7.json'
                background='transparent'
                speed='1'
                autoplay
                loop
              ></lottie-player>
            </div>
            <div className='absolute inset-0 flex items-center justify-center flex-col'>
              <h1 className='text-2xl font-bold'>
                Moshi Moshi
                <hr />
                <pre className='text-xl my-5 font-semibold md:text-sm'>
                  {JSON.stringify(
                    {
                      name: 'Chip Taylor',
                      age: true,
                      gender: 'male',
                      country: 'Nirvana',
                    },
                    null,
                    2
                  )}
                </pre>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
