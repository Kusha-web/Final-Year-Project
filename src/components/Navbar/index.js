import React from "react";
import cart from '../images/shopping-cart.png';
import { useEffect } from "react";

const Navbar = () => {
    useEffect(() => {
        var nav = document.querySelector('nav');

        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 300) {
                nav.classList.add('bg-dark', 'shadow');
            } else {
                nav.classList.remove('bg-dark', 'shadow');
            }
        });
    },[]);
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
            <div className="container">
                <a href="#" className="navbar-brand">LOGO</a>

                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <div class="mx-auto"></div>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Pricing</a>
                        </li>
                        <li class="nav-item" style={{ marginLeft: "30px" }}>
                            <img style={{ marginTop: "8px", height: "25px", width: "25px" }} src={cart} alt="" />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;