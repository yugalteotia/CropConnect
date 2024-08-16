import React from 'react';
import { useEmail } from '../../context/EmailContext';
import { useAuth } from '../../hooks/useAuth'; // Import the useAuth hook for user authentication
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const Hero = () => {
    const { email } = useEmail();
    const { user, logout } = useAuth(); // Destructure user and logout from useAuth
    const navigate = useNavigate(); // Initialize navigate

    // Check if userEmail exists and process it
    const userEmail = localStorage.getItem('userEmail');
    let name;
    if (userEmail) {
        name = userEmail.replace("@gmail.com", '').toUpperCase();
    }

    let nameFromEmail;
    if (typeof email === 'string' && email.includes('@gmail.com')) {
        nameFromEmail = email.replace("@gmail.com", '').toUpperCase();
    } else {
        nameFromEmail = name;
    }


    //getting role from the hook
    const userRole = user?.role; 

    // Handle logout and redirect
    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className="bg-gradient-to-b from-[#101212] to-[#08201D] relative">
            <header className="absolute inset-x-0 top-0 z-10 w-full bg-opacity-75">
                <div className="px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-10 lg:h-12">
                        <div className="flex-shrink-0">
                            <a href="/" title="" className="flex items-center text-xl text-green-500 font-bold">
                                CropConnect
                            </a>
                        </div>

                        <div className="hidden lg:flex items-center gap-10">
                            <a href="/about-us" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80">About Us</a>
                            <a href="/contact-us" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80">Contact Us</a>
                        </div>

                        <div className="flex items-center gap-3">
                            {user ? (
                                <>
                                    

                                    {/* Conditional rendering based on user role */}
                                    {userRole === 'MERCHANT'  ?(
                                        <a 
                                        href="/merchant" 
                                        title="Merchant Page" 
                                        className="btn  text-white btn-outline-light text-base rounded-lg px-4 py-2 transition-all duration-200 whitespace-nowrap hover:bg-green-800"
                                    >
                                        Merchant Page
                                        </a>
                                    ) :
                                     (
                                        <a 
                                        href="/farmer" 
                                        title="Merchant Page" 
                                        className="btn  text-white btn-outline-light text-base rounded-lg px-4 py-2 transition-all duration-200 whitespace-nowrap hover:bg-green-800"
                                    >
                                        Farmer Page
                                        </a>
                                    )}

                                    <a href="" title="Profile" className="text-base mx-12 text-white transition-all duration-200 hover:text-opacity-80">
                                        Welcome,<span>{nameFromEmail}</span> 
                                    </a>

                                    <button
                                        onClick={handleLogout}
                                        className="btn btn-outline-light text-base transition-all duration-200 hover:text-opacity-80"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <a href="/signin" title="Log in" className="btn btn-outline-light text-base transition-all duration-200 hover:text-opacity-80">
                                        Sign In
                                    </a>
                                    <a href="/signup" title="Sign up" className="btn btn-outline-light text-base transition-all duration-200 hover:text-opacity-80">
                                        Sign up
                                    </a>
                                </>
                            )}
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
                <div className="navbar-nav lg:hidden bg-[#101212] p-4">
                    <a href="/about-us" title="" className="nav-link text-base text-white transition-all duration-200 hover:text-opacity-80">About Us</a>
                    <a href="/contact-us" title="" className="nav-link text-base text-white transition-all duration-200 hover:text-opacity-80">Contact Us</a>
                    {user ? (
                        <>
                            <a href="/profile" title="Profile" className="btn btn-outline-light w-100 mb-2">
                                {nameFromEmail}
                            </a>

                            {/* Conditional rendering based on user role */}
                            {userRole === 'merchant' && (
                                <a href="/merchant" title="Merchant Page" className="btn btn-outline-light w-100 mb-2">
                                    Merchant Page
                                </a>
                            )}
                            {userRole === 'farmer' && (
                                <a href="/farmer" title="Farmer Page" className="btn btn-outline-light w-100 mb-2">
                                    Farmer Page
                                </a>
                            )}
                        </>
                    ) : (
                        <>
                            <a href="/signin" title="Log in" className="btn btn-outline-light w-100 mb-2">
                                Log in
                            </a>
                            <a href="/signup" title="Sign up" className="btn btn-outline-light w-100">
                                Sign up
                            </a>
                        </>
                    )}
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
