import React from 'react';
import logo from '../../assets/logo.png'; 

const Hero = () => {
    return (
        <div className="bg-gradient-to-b from-[#101212] to-[#08201D] relative">
            <header className="absolute inset-x-0 top-0 z-10 w-full bg-opacity-75">
                <div className="px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="d-flex align-items-center justify-between h-10 lg:h-12">
                        <div className="flex-shrink-0">
                            <a href="/home" title="" className="flex items-center text-xl text-green-500 font-bold">
                                CropConnect
                            </a>
                        </div>

                        <div className="d-none d-lg-flex align-items-center gap-10">
                            <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80">About Us</a>
                            <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80">Contact Us</a>
                        </div>

                        <div className="d-flex align-items-center gap-3">
                            {/* Log in button with link */}
                            <a href="/signin" title="Log in"
                                className="btn btn-outline-light text-base transition-all duration-200 hover:text-opacity-80">
                                Log in
                            </a>

                            {/* Sign up button with link */}
                            <a href="/signup" title="Sign up"
                                className="btn btn-outline-light text-base transition-all duration-200 hover:text-opacity-80">
                                Sign up
                            </a>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            type="button"
                            className="lg:hidden inline-flex p-2 text-white transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="sr-only">Main Menu</span>
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* Collapsible Menu */}
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav d-lg-none bg-[#101212] p-4">
                    <a href="#" title="" className="nav-link text-base text-white transition-all duration-200 hover:text-opacity-80">About Us</a>
                    <a href="#" title="" className="nav-link text-base text-white transition-all duration-200 hover:text-opacity-80">Contact Us</a>
                    <a href="/signin" title="Log in" className="btn btn-outline-light w-100 mb-2">
                        Log in
                    </a>
                    <a href="/signup" title="Sign up" className="btn btn-outline-light w-100">
                        Sign up
                    </a>
                </div>
            </div>
            <section className="relative lg:min-h-[80px] pt-24 pb-10 sm:pt-32 sm:pb-16 lg:pb-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
                    <div className="max-w-xl mx-auto text-center">
                        <h1 className="text-4xl font-bold sm:text-6xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white">
                                A Digital Marketplace for Farmers and Merchants
                            </span>
                        </h1>
                        <p className="mt-5 text-base text-white sm:text-xl">
                            Crop Connect is a web-based platform that revolutionizes the agricultural supply chain by connecting farmers directly with merchants.
                        </p>
                    </div>
                </div>
            </section>
            
        </div>
    );
}

export default Hero;
