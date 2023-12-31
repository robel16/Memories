import React, { useState, useEffect, useRef } from 'react';
import { HiMenu } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link, Route, Routes } from 'react-router-dom';
import {Sidebar,UserProfile} from '../components'
import { client } from '../client';
import logo from '../assets/logo.png';
import { userQuery } from '../utils/data';

import Pins from './Pins';

const Home = () => {
  const [ToggleSidebar, setToggleSidebar] = useState(false);
  const userInfo = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
  const [user, setUser] = useState(null);
const scrollref=useRef()

  useEffect(() => {
    const query = userQuery(userInfo?.uid);

    client.fetch(query).then((data) => {
      setUser(data[0]);
   
    });
  }, [userInfo]); // Add userInfo as a dependency

  useEffect(()=>{
    scrollref.current.scrollTo(0,0)
  },[])

  const handleToggleSidebar = () => {
    setToggleSidebar(!ToggleSidebar); // Toggle the value of ToggleSidebar
  };

  return (
    <>
    <div className='flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out '>
      <div className='hidden md:flex h-screen flex-initial'>
        <Sidebar user={user && user} />
      </div>
      <div className='flex md:hidden flex-row'>
        <div className='p-2 w-full flex flex-row justify-between items-center shadow-md'>
<HiMenu fontSize={40} className=' cursor-pointer' onClick={handleToggleSidebar} />
        <Link to='/'>
          <img src={logo} alt='logo' className='w-28' />
        </Link>
        <Link to={`user-profile/${user?._id}`}>
          <img src={user?.image} alt='logo' className='w-28' />
        </Link>
        </div>
 
        </div>
    {ToggleSidebar && (
          <div className='fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in'>
            <div className='absolute w-full flex justify-end items-center p-2'>
              <AiFillCloseCircle fontSize={30} className='cursor-pointer' onClick={handleToggleSidebar} />
            </div>
            <Sidebar user={user && user} cLoseToggle={handleToggleSidebar} />
          </div>
        )}
        </div>
        
    
        <div className='pb-2 flex-1 h-screen overflow-y-auto 'ref={scrollref} >
          <Routes>
            <Route path="/user-profile/:userId" element={<UserProfile/>}/>
             <Route path="/*" element={<Pins user={user && user }/>}/>
          </Routes>
        
      </div>
   
      </>);
};

export default Home;
