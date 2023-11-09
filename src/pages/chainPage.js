import React from "react";
import '../App.css'
import Navbar from "../util/navbarUtil";

const ChainPage = () => {
    return(
        <div>
            <header>
                <Navbar />
            </header>
            <h1>hello</h1>
            <footer>
                <div className="directory">
                    <nav>
                        <ul>
                            <a href="/">
                                <li>Home</li>
                            </a>
                            <a href="ringPage">
                                <li>rings</li>
                            </a>
                            <a href='diamondPage'>
                                <li>diamonds</li>
                            </a>
                            <a href="earringPage">
                                <li>earrings</li>
                            </a>
                            <a href="necklacePage">
                                <li>necklaces</li>
                            </a>
                            <a href="watchesPage">
                                <li>watches</li>
                            </a>
                            <a href="chainPage">
                                <li>chains</li>
                            </a>
                            <a href="contactPage">
                                <li>contact us</li>
                            </a>
                        </ul>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default ChainPage;