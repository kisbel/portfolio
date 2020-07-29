import React from 'react';
import './Contact.css';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

function ContactPage () {
    return (
        <>
            <Nav />

            <div id="ph1">contact</div>

            <div id="form-area">
                <form action="https://formspree.io/xwkraggk" method="POST">
                    <div class="form-input">
                        <label for="your_name">name:</label>
                        <input id="your_name" type="text" name="your_name" autocomplete="off"></input>
                    </div>

                    <div class="form-input">
                        <label for="your_email">email address:</label>
                        <input id="your_email" type="email" name="your_email" autocomplete="off"></input>
                    </div>

                    <div class="form-input">
                        <label for="your_message">message:</label>
                        <textarea name="your_message" id="your_message" cols="40" rows="10"></textarea>
                    </div>

                    <div class="buttons">
                        <button type="submit">submit</button>

                        <button type="reset">reset</button>
                    </div>
                </form>
            </div>

            <Footer />
        </>
    )
}

export default ContactPage;