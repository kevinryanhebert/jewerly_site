import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";



const Navbar = () => {
  return (
    <div>
        <header>
            <nav>
                <a href="/">
                <img src="https://cdn-icons-png.flaticon.com/512/3556/3556995.png" alt='diamond_photo' className="logo" />
                </a>
                <ul>
                    <li>
                        <a href="">Login</a>
                    </li>
                    <li>
                        <a href="">Sign up</a>
                    </li>
                    <li className='search'>
                        <a href=''>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />                            
                        </a>
                    </li>
                    <li className="hamburger">
                        <a href="">
                            <div className="bar"></div>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  );
};

export default Navbar;