import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <img src="/img/img.png" />
            <h1>Hello,</h1>
            <h2>I'm Eunice.</h2><br />
            <p>Admin in the morning,<br /><strong>web developer</strong><br /> by night.</p>
        </div>
    )
}

export default HeroSection;