/* eslint-disable react/prop-types */

const Navbar = ({price}) => {
    return (

        <div className='flex justify-between items-center bg-blur sticky top-0  p-5 rounded-md'>
            <img className='' src="/src/assets/logo.png" alt="" />
            <ul className='flex items-center gap-6 font-bold'>
                <li>Home</li>
                <li>Fixture</li>
                <li>Team</li>
                <li>Schedule</li>
                <button className='btn border-2 px-5 py-2 rounded-xl '>{price} Coin <i className="fa-solid fa-coins"></i></button>
            </ul>
        </div>
    );
};

export default Navbar;