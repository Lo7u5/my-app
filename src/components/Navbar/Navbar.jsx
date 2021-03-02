import React from 'react';
import {NavLink} from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar'

const Navbar = (props) => {
    return (
        <div className='bg-myGray-warmGray bg-opacity-25 rounded-xl text-center hidden lg:block'>
            <nav>
                <div className='pt-1.5 mt-3'><NavLink className='text-myGray-darkIce' to='/profile' activeClassName='font-bold'>Profile</NavLink></div>
                <div className='pt-1.5'><NavLink className='text-myGray-darkIce' to='/messages' activeClassName='font-bold'>Messages</NavLink></div>
                <div className='pt-1.5'><NavLink className='text-myGray-darkIce' to='/news' activeClassName='font-bold'>News</NavLink></div>
                <div className='pt-1.5'><NavLink className='text-myGray-darkIce' to='/music' activeClassName='font-bold'>Music</NavLink></div>
                <div className='pt-1.5'><NavLink className='text-myGray-darkIce' to='/settings' activeClassName='font-bold'>Settings</NavLink></div>
            </nav>
            <div className='pt-1.5 mt-8'><NavLink className='text-myGray-darkIce' to='/users' activeClassName='font-bold'>Find Users</NavLink></div>
            <div className='mt-20'>
                <Sidebar/>
            </div>
        </div>
    );
}

export default Navbar;