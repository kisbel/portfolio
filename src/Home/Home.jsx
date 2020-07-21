import React from 'react';
import './Home.css';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

function Home() {
    return (
        <>
        <Nav />
        <div id="home-text">

            <div class="text-within">
                <h1>hello</h1>
            </div>

            <div class="break"></div>

            <div class="text-within-a">
                <h2>my name is kisbel espinal </h2>
            </div>

            <div class="break"></div>

            <div class="text-within">
                <h3>i'm a junior developer and this is my portfolio site</h3>
            </div>

        </div>
        <Footer />
        </>
    )
}


export default Home;