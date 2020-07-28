import React from 'react';
import './Footer.css';
import { faFemale, faBriefcase, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Footer () {
    return (
            <div class="footerNav">
                <ul>

                    <Link to="/">
                        <li>
                            <FontAwesomeIcon icon={faHome} size="2x" color="white" />
                        </li>
                    </Link>

                    <Link to="/about">
                        <li>
                            <FontAwesomeIcon icon={faFemale} size="2x" color="white" />
                        </li>
                    </Link>

                    <Link to="/portfolio">
                        <li>
                            <FontAwesomeIcon icon={faBriefcase} size="2x" color="white" />
                        </li>
                    </Link>

                    <Link to="/contact">
                        <li>
                            <FontAwesomeIcon icon={faEnvelope} size="2x" color="white" />
                        </li>
                    </Link>
                </ul>
            </div>
    )
}

export default Footer;