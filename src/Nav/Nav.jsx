import React from 'react';
import './Nav.css'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Nav () {
    return (
        <>
        <div id="nav">
            <nav>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/kisbel-espinal-39ba6a1a3/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" color="white" />
                        </a>
                    </li>

                    <li>
                        <a href="https://github.com/kisbel" target="_blank">
                            <FontAwesomeIcon icon={faGithubSquare} size="2x" color="white" />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        </>
    )
}


export default Nav;