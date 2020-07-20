import React from 'react';
import './Nav.css'

function Nav () {
    return (
        <>
        <div id="nav">
            <nav>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/kisbel-espinal-39ba6a1a3/" target="_blank">
                            <i class="fab fa-linkedin fa-2x"></i>
                        </a>
                    </li>

                    <li>
                        <a href="https://github.com/kisbel" target="_blank">
                            <i class="fab fa-github-square fa-2x"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default Nav;