import React, { useState , useEffect } from 'react'
import './Nav.css';

function Nav() {
    const [show,handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll",() => {
            if(window.scrollY > 120) {
                handleShow(true);
            }else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        };
    },[]);

    return (
        <div className ={`nav ${show && "nav__black"}`}>
            <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png" alt="Netflix Logo"/>
            <img className="nav__avatar" src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" alt="Netflix logo"/>
        </div>
    );
}

export default Nav
