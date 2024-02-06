import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Video from './components/Video';
import Section from './components/Section';
import { useRef, forwardRef } from 'react';
import { useState, useEffect } from 'react';

function App() {


  /*
  
  const videoRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  function handleScrollToVideo() {
    videoRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function handleScrollToAbout() {
    aboutRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }
  
  function handleScrollToContact() {
    contactRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }
*/
const videoRef = useRef(null);
const aboutRef = useRef(null);
const contactRef = useRef(null);

const aboutClick = () => {
  
    aboutRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: "center", inline: "center"
    });
  }

  const videoClick = () => {
    videoRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: "center", inline: "center"
    });
  }

  const contactClick = () => {
    contactRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: "center", 
      inline: "center"
    });
  }

  

  return (
    <div className="App">
      <NavBar videoClick={videoClick} aboutClick={aboutClick} contactClick={contactClick}/>
      <div className='wrapper'>

        <Video ref={videoRef}/>
        
        <Section text='About' ref={aboutRef}/>
        <Section text='Contact' ref={contactRef}/>
      </div>
    </div>
  );
}

export default App;
