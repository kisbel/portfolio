import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './About.css';
import kispic from '../Pictures/kispic.jpg';

function About () {
    return (
        <>
        <Nav />
            <div id="ph1">about kisbel</div>

            <div id="kis-info">
                <img src={kispic} alt="picture of kisbel"></img>
                <br />
                <p1>Hi! I'm Kisbel. I recently graduated from Wyncode Academy's Full Stack Web Development program.
                I have experience using React, Javascript, HTML, CSS (to name a few) - if you'll click on the LinkedIn, you'll see the variety
                of skills I've used in my work. 

                Before I started the full stack development program, I was a research coordinator at a university for a research project. 
                While I do enjoy coding, I would ideally like to combine my two paths - managing and coding - and become a tech PM.
                </p1>
            </div>
        <Footer />
        </>
    )
}

export default About;