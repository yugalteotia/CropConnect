import React from 'react'
import NavigationBar from './NavigationBar'
import CarouselComp from './CarouselComp'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Footer from './Footer';

// import Ca from './CarouselComp'

function Home() {
    return (
        <>
            <NavigationBar />
            <CarouselComp />
            <Footer />
        </>
    )
}

export default Home
