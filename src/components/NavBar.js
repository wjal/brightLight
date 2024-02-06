import { useRef, } from 'react';


const NavBar = ({contactClick, aboutClick, videoClick}) => {

    return (
        <div className="navbar">
            <img src="logo.png" className="logo" alt="logo" />
            <div className="navbar-menu">
                <button className='menu-button' onClick={videoClick}>Products</button>
                <button className='menu-button' onClick={aboutClick}>About Us</button>
                <button className='menu-button' onClick={contactClick}>Contact Us</button>
            </div>
        </div>
    )
}


export default NavBar;



