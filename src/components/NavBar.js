import { useRef, } from 'react';


const NavBar = ({contactClick, aboutClick, videoClick}) => {

    return (
        <div className="navbar">
            <img src="logo.png" className="logo" alt="logo" />
            <div className="navbar-menu">
                <button className='menu-button' onClick={videoClick} onMouseDown={(e) => {
                    const target = e.target;
                    target.style.animation = '';
                    target.style.color = 'rgb(231, 104, 87)';
                }} onMouseUp={(e) => {
                    const target = e.target;
                    target.style.color = 'white';
                    target.style.animation = 'fade .6s linear';}}>Products</button>
                <button className='menu-button' onClick={aboutClick} onMouseDown={(e) => {
                    const target = e.target;
                    target.style.animation = '';
                    target.style.color = 'rgb(231, 104, 87)';}} onMouseUp={(e) => {
                        const target = e.target;
                        target.style.color = 'white';
                        target.style.animation = 'fade .6s linear';}}>About Us</button>
                <button className='menu-button' onClick={contactClick} onMouseDown={(e) => {
                    const target = e.target;
                    target.style.animation = '';
                    target.style.color = 'rgb(231, 104, 87)';}} onMouseUp={(e) => {
                        const target = e.target;
                        target.style.color = 'white'
                        target.style.animation = 'fade .6s linear';}} >Contact Us</button>
            </div>
        </div>
    )
}


export default NavBar;



