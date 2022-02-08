import React from 'react';
import Layout from '../components/Layout';
import projectsData from '../resources/projects';
import AOS from 'aos';

function Projects() {
  return (
    <Layout>
      <div className='mt-20'>
        <div className='h-screen'>
          <div className='h-3/4'>
            <lottie-player
              src='https://assets7.lottiefiles.com/packages/lf20_ygiuluqn.json'
              background='transparent'
              speed='1'
              autoplay
              loop
            ></lottie-player>
          </div>
          <p className='text-xl font-semibold text-center'>
            Good ideas are not adopted automatically. They must be riven into
            practice with courageous patience.
          </p>
          <h1
            className='text-4xl text-center font-bold mt-5'
            data-aos='flip-up'
          >
            Because
          </h1>
        </div>
        <div className='font-bold text-center bg-red-500 text-white mx-20 md:mx-5 p-20 rounded-tl-full rounded-br-full'>
          <h1 className='text-7xl md:text-3xl'>THE GAME IS...</h1>
          <h1 className='text-7xl md:text-3xl'>CONSISTENCY</h1>
        </div>
      </div>

      <div className='grid mt-20 grid-cols-3 md:grid-cols-1 items-center justify-center gap-10 mx-20 md:mx-5 mb-16'>
        {projectsData.map((project) => {
          return (
            <div key={project.key}>
              <div className='p-6 border-2 text-center rounded-tr-3xl rounded-bl-3xl border-gray-400 relative overflow-hidden'>
                <img
                  className='w-full h-52'
                  src={project.image}
                  alt='Project Icon'
                />
                <div className='absolute inset-0 flex items-center justify-center flex-col opacity-0 bg-black hover:opacity-70'>
                  <h1 className='text-3xl font-semibold text-white'>
                    {project.title}
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

export default Projects;
