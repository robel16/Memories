import React, { useState, useEffect } from 'react';
import { HiMenu } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Sidebar } from '../components';
import { client } from '../client';
import logo from '../assets/logo.png';
import { userQuery } from '../utils/data';

const Home = () => {
  const [ToggleSidebar, setToggleSidebar] = useState(false);
  const userInfo = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const query = userQuery(userInfo?.uid);

    client.fetch(query).then((data) => {
      setUser(data[0]);
   
    });
  }, [userInfo]); // Add userInfo as a dependency

  const handleToggleSidebar = () => {
    setToggleSidebar(!ToggleSidebar); // Toggle the value of ToggleSidebar
  };

  return (
    <div className='flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out '>
      <div className='hidden md:flex h-screen flex-initial'>
        <Sidebar user={user && user} />
      </div>
      <div className='flex md:hidden flex-row'>
        <HiMenu fontSize={40} className='cursor cursor-pointer' onClick={handleToggleSidebar} />
        <Link to='/'>
          <img src={logo} alt='logo' className='w-28' />
        </Link>
        <Link to={`user-profile/${user?._id}`}>
          <img src={user?.image} alt='logo' className='w-28' />
        </Link>
        {ToggleSidebar && (
          <div className='fixed w-4/5 bg-white h-full overflow-y-auto shadow-md z-10 animate-slide-in'>
            <div className='absolute w-full flex justify-end items-center p-2'>
              <AiFillCloseCircle fontSize={30} className='cursor-pointer' onClick={handleToggleSidebar} />
            </div>
            <Sidebar user={user && user} cLoseToggle={handleToggleSidebar} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
