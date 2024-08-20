import React from 'react'
import {Parallax, ParallaxLayer } from '@react-spring/parallax';
import './App.css';
import TextBlock from './TextBlock';


const Body = () => {
  return (
    <>
  
    <div >
    
    <Parallax pages={2} style={{ top: '0', left: '0', zIndex: '1' }} className="animation">
   
   <ParallaxLayer offset={0} speed={0.25}>
    <div className="animation_layer parallax " id="artback"></div>
   </ParallaxLayer>
   <ParallaxLayer offset={0} speed={0.3}>
    <div className="animation_layer parallax " id="mountain"></div>
   </ParallaxLayer>
   <ParallaxLayer offset={0} speed={-0.5}>
    <h1 className="animation_layer parallax " id="logoland">ETHICS WALA CODER </h1>
   </ParallaxLayer>
   <ParallaxLayer offset={0} speed={0.3}>
    <div className="animation_layer parallax " id="jungle1"></div>
   </ParallaxLayer>
   <ParallaxLayer offset={0} speed={0.35}>
    <div className="animation_layer parallax " id="jungle2"></div>
   </ParallaxLayer>
   <ParallaxLayer offset={0} speed={0.5}>
    <div className="animation_layer parallax " id="jungle3"></div>
   </ParallaxLayer>
   <ParallaxLayer offset={0} speed={0.45}>
    <div className="animation_layer parallax " id="jungle4"></div>
   </ParallaxLayer>
   <ParallaxLayer offset={0} speed={0.40}>
    <div className="animation_layer parallax " id="manonmountain"></div>
   </ParallaxLayer>
   <ParallaxLayer offset={0} speed={0.33}>
    <div className="animation_layer parallax " id="jungle5"></div>
   </ParallaxLayer>
   <ParallaxLayer offset={1} speed={0.22}>
    <TextBlock/>
   </ParallaxLayer>
   
 </Parallax>
 </div>
 </>
  )
}

export default Body