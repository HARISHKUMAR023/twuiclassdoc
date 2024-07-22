// import { useSelector } from 'react-redux';
import Navbar from './Navbar/Navbar';
// import Footer from '../comman/Footer/Fotter';
import { Outlet } from 'react-router-dom';
// import { RootState } from '../../Store/types';
import Asite from './Asite/Asite';

const Layout = () => {
//   const userRole = useSelector((state: RootState) => state.auth.user?.role) || 'guest';
  
  return (
    <div className='h-screen flex flex-col'>
      <div className="flex flex-1 bg-white dark:bg-darkbg2 overflow-hidden shadow">
        <div className='w-auto '>
          <Asite/>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className=' mr-2 rounded-md sticky top-0'>
            <Navbar />
          </div>
          <div className="bg-white/70 dark:bg-[#333333] p-3 mr-2 mb-2 rounded-md flex-1 overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
      <div className='w-full border-t-[0.1px] dark:border-gray-100 border-gray-500'>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Layout;