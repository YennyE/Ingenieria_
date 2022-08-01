const Navbar = () => (
  <nav className='p-10 bg-blue-900 text-white text-center '>
    <div>
      <img
        src='Foto.jpg'
        className='block mx-auto w-40 h-40'
        alt='foto perfil'
      />
    </div>

    <span className='sm:text-lg md:text-2xl lg:text-3xl font-extrabold'>
      YENNY ELIZABETH TOMBE ALMENDRA
    </span>
    <span className='flex flex-col sm:text-md md:text-lg lg:text-2xl'>
      Cel: 3138573773 / yenny.tombe@udea.edu.co / Cra 51d #67a-41
    </span>
  </nav>
);

export default Navbar;
