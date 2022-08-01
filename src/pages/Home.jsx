import React from 'react';

const Home = () => (
  <main>
    <div className='flex mb-4'>
      <div className='w-1/2 p-3 bg-gray-100'>
        <h1 className='sm:text-lg md:text-3xl lg:text-4xl font-extrabold'>
          Perfil
        </h1>
        <div className='flex flex-col'>
          <p className='text-gray-800 sm:text-md md:text-lg lg:text-2xl text-justify'>
            Estudiante de séptimo semestre de ingeniería de sistemas en busca de
            oportunidad como desarrolladora frontend. Soy una persona
            responsable y organizada, que posee disposición para trabajar en
            equipo o individual, según la situación del momento.
          </p>
        </div>
        <h2 className='sm:text-lg md:text-3xl lg:text-4xl font-extrabold'>
          Formación académica
        </h2>
        <div className='flex flex-col'>
          <span className='text-gray-800 sm:text-md md:text-lg lg:text-2xl'>
            Secundaria
          </span>
          <span className='text-gray-500 sm:text-md md:text-lg lg:text-2xl'>
            Normal superior de Popayán
          </span>
          <span className='text-gray-500 sm:text-md md:text-lg lg:text-2xl'>
            Popayán
          </span>
          <span className='text-gray-800 sm:text-md md:text-lg lg:text-2xl'>
            Ingeniería de sistemas
          </span>
          <span className='text-gray-500 sm:text-md md:text-lg lg:text-2xl'>
            Universidad de Antioquia
          </span>
          <span className='text-gray-500 sm:text-md md:text-lg lg:text-2xl'>
            Medellín
          </span>
        </div>
        <h3 className='sm:text-lg md:text-3xl lg:text-4xl font-extrabold'>
          Intereses
        </h3>
        <div className='flex flex-col'>
          <p className='text-gray-800 sm:text-md md:text-lg lg:text-2xl text-justify'>
            Me interesa bastante aprender todo lo que tenga que ver con el
            desarrollo.
          </p>
        </div>

        <h4 className='sm:text-lg md:text-3xl lg:text-4xl font-extrabold'>
          Pasatiempos
        </h4>
        <div className='flex flex-col'>
          <p className='text-gray-800 sm:text-md md:text-lg lg:text-2xl text-justify'>
            En mis tiempos libres me gusta ver películas de ciencia ficción.
          </p>
        </div>
        <h5 className='sm:text-lg md:text-3xl lg:text-4xl font-extrabold'>
          Cursos
        </h5>
        <div className='flex flex-col'>
          <li className='text-gray-800 sm:text-md md:text-lg lg:text-2xl'>
            Ingeniería web
          </li>
          <li className='text-gray-800 sm:text-md md:text-lg lg:text-2xl'>
            Técnicas de programación
          </li>
          <li className='text-gray-800 sm:text-md md:text-lg lg:text-2xl'>
            Análisis y diseño de sistemas I y II
          </li>
        </div>
      </div>

      <div className='w-1/2 p-3  bg-gray-100'>
        <h6 className='sm:text-lg md:text-3xl lg:text-4xl font-extrabold'>
          Datos personales
        </h6>
        <div className='flex flex-col'>
          <span className='text-gray-800 sm:text-md md:text-lg lg:text-2xl'>
            Fecha de nacimiento
          </span>
          <span className='text-gray-500 sm:text-md md:text-lg lg:text-2xl'>
            04 / 12 / 91
          </span>
          <span className='text-gray-800 sm:text-md md:text-lg lg:text-2xl'>
            Lugar de nacimiento
          </span>
          <span className='text-gray-500 sm:text-md md:text-lg lg:text-2xl'>
            Silvia-Cauca
          </span>
          <span className='text-gray-800 sm:text-md md:text-lg lg:text-2xl'>
            Género
          </span>
          <span className='text-gray-500 sm:text-md md:text-lg lg:text-2xl'>
            Femenino
          </span>
          <span className='text-gray-800 sm:text-md md:text-lg lg:text-2xl'>
            Nacionalidad
          </span>
          <span className='text-gray-500 sm:text-md md:text-lg lg:text-2xl'>
            Colombiana
          </span>
        </div>
        <h7 className='sm:text-lg md:text-3xl lg:text-4xl font-extrabold'>
          Idiomas
        </h7>
        <div className='flex flex-col'>
          <span className='text-gray-800 sm:text-md md:text-lg lg:text-2xl'>
            Inglés
          </span>
          <span className='text-gray-500 sm:text-md md:text-lg lg:text-2xl'>
            Básico
          </span>
        </div>
      </div>
    </div>
  </main>
);

export default Home;
