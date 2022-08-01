import Navbar from 'componentes/navigation/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <main className='flex h-screen'>
    <div className='w-full h-screen flex flex-col flex-grow'>
      <Navbar />
      <div className='flex h-full'>
        <Outlet />
      </div>
    </div>
  </main>
);

export default Layout;
