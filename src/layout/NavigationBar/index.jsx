import React, { useState, useRef, useEffect} from 'react';
import './navbar.css';
// icons imports 
import { IoCloseOutline } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { RiUserFollowFill } from "react-icons/ri";
import { GrResources } from "react-icons/gr";
import { AiFillSchedule } from "react-icons/ai";
import { SiGoogleforms } from "react-icons/si";
import { FaUserGraduate } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdDashboard, MdEvent, MdManageAccounts, MdFeedback } from "react-icons/md";

//component imports
import { Notification } from '..'
import { ProfileCard } from '..';

const index = () => {
  const [nav, setNav] = useState(false);
  const [profile, setProfile] = useState(false)
  const [notification, setNotification] = useState(false)

  const navRef = useRef(null);
  const profileRef = useRef(null);
  const notificationRef = useRef(null)

  const handleNav = () => {
    setNav(!nav);
  };

  const handleProfile = () => {
    setProfile(!profile)
  }

  const handleNotification = () => {
    setNotification(!notification)
  }

  // Close nav and profile when clicking outside of them
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNav(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfile(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setNotification(false)
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navRef, profileRef, notificationRef]);
  
  return (
    <React.Fragment>
      <nav className='fixed flex justify-between p-8 w-screen'>
        <div className='relative'>
          {/* Mobile Menu Toggle Button */}
          <div className="absolute flex z-20 ">
            <div onClick={handleNav} ref={navRef}className="cursor-pointer">
              {!nav ? (
                <CiMenuFries size={28} className="rotate-180 text-primary-color" />
              ) : (
                <IoCloseOutline size={28} className="text-primary-color" />
              )}
            </div>
            <div className="ml-4">
              <span className="text-xl font-semibold text-primary-color">DMS</span>
            </div>
          </div>
          {/* Sidebar Content */}
          <div
            className={`${
              nav ? 'left-0' : '-left-full'
            } fixed min-w-64 top-0 pt-16 h-screen text-dark-color bg-white transition-all ease-in-out duration-700`}
          >
            <ul className=''>
              <div className='group navGroup'>
                <li className='navItem'>
                  <MdDashboard size={18}/>
                  <span>Dashboard</span>
                </li>
                <span className='navSpan'></span>
              </div>
              <div className='group navGroup'>
                <li className='navItem'>
                  <MdEvent size={18} />
                  <span>Events</span>
                </li>
                <span className='navSpan'></span>
              </div>
              <div className='group navGroup'>
                <li className='navItem'>
                  <RiUserFollowFill size={18} />
                  <span>Attendence</span>
                </li>
                <span className='navSpan'></span>
              </div>
              <div className='group navGroup'>
                <li className='navItem'>
                  <GrResources size={18}/>
                  <span>Resource</span>
                </li>
                <span className='navSpan'></span>
              </div>
              <div className='group navGroup'>
                <li className='navItem'>
                  <MdManageAccounts size={18}/>
                  <span>Manage Data</span>
                </li>
                <span className='navSpan'></span>
              </div>
              <div className='group navGroup'>
                <li className='navItem'>
                  <MdFeedback size={18}/>
                  <span>Feedback</span>
                </li>
                <span className='navSpan'></span>
              </div>
              <div className='group navGroup'>
                <li className='navItem'>
                  <AiFillSchedule size={18}/>
                  <span>Time Tables</span>
                </li>
                <span className='navSpan'></span>
              </div>
              <div className='group navGroup'>
                <li className='navItem'>
                  <SiGoogleforms size={18}/>
                  <span>Applications</span>
                </li>
                <span className='navSpan'></span>
              </div>
              <div className='group navGroup'>
                <li className='navItem'>
                  <FaUserGraduate size={18}/>
                  <span>Alumni</span>
                </li>
                <span className='navSpan'></span>
              </div>
            </ul>
            <div className='absolute bottom-0 p-2 w-full text-center'>
              <span className='text-xs text-center text-gray-600'>Developed by RP & Team</span>
            </div>
          </div>
        </div>
        <div className='flex justify-around items-center space-x-4 text-primary-color'>
          <div className='relative'>
            <div onClick={handleNotification} ref={notificationRef} className='hover:cursor-pointer hover:text-dark-color'>
              <IoNotifications size={28} />
            </div>
            <div className={
              `${!notification ? 'hidden' : 'block'}
              absolute right-0 min-w-48 mt-4`
            }>
              <Notification />
            </div>
          </div>
          <div className='relative'>
            <div onClick={handleProfile} ref={profileRef} className='hover:cursor-pointer hover:text-dark-color'>
              <CgProfile size={28}/>
            </div>
            <div className={
              `${!profile ? 'hidden' : 'block'}
              absolute right-0 min-w-40 mt-4`}>
              <ProfileCard />
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default index;
