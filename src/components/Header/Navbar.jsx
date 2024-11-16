import React from 'react';

const Navbar = () => {
    return (
        
        <div className='flex justify-between items-center '>
            <img className='' src="/src/assets/logo.png" alt="" />
            <ul className='flex items-center gap-6'>
                <li>Home</li>
                <li>Fixture</li>
                <li>Team</li>
                <li>Schedule</li>
            <button className='btn border-2 px-5 py-2 rounded-xl '>Coin</button>
            </ul>
        </div>
    );
};

export default Navbar;