import React from 'react';
import './Footer.css';
import { faFemale, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer () {
    return (
        <>
        <footer>
            <ul>
                <li>
                    <a href="/Users/kespinal/Desktop/coding/portfolio-HTML-site/about.html">
                        <FontAwesomeIcon icon={faFemale} size="2x" color="white" />
                    </a>
                </li>

                <li>
                    <a href="/portfolio">
                        <FontAwesomeIcon icon={faBriefcase} size="2x" color="white" />
                    </a>
                </li>

                <li>
                    <a href="/Users/kespinal/Desktop/coding/portfolio-HTML-site/contact.html">
                        <FontAwesomeIcon icon={faEnvelope} size="2x" color="white" />
                    </a>
                </li>
            </ul>
        </footer>
        </>
    )
}

export default Footer;