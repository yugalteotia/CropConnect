import React, {useState,useEffect} from 'react'
// import NavigationBar from './NavigationBar'
// import CarouselComp from './CarouselComp'
// import 'bootstrap/dist/css/bootstrap.min.css'; 
// import axios from 'axios';
// import Footer from './Footer';
// import GovernmentSchemeTable from './GovernmentSchemeTable';
// import Hero from './Hero';

// import React from 'react';
import NavigationBar from './NavigationBar';
import CarouselComp from './CarouselComp';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Footer from './Footer';
import GovernmentSchemeTable from './GovernmentSchemeTable';
import Hero from './Hero';

const pageStyles = {
  backgroundColor: '#d4edda', // Light green background color
  minHeight: '100vh', // Ensure the background covers the entire viewport height
  padding: '20px', // Optional: Add some padding around the content
};

function Home() {
    return (
        <div style={pageStyles}>
            <Hero />
            <hr className="my-8 border-t-2 border-gray-700" />
            <GovernmentSchemeTable />
            <Footer />
        </div>
    );
}

export default Home;


    // const [farmers, setFarmers] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     axios.get('/api/farmers')
    //         .then(response => {
    //             setFarmers(response.data);
    //             setLoading(false);
    //         })
    //         .catch(error => {
    //             setError(error);
    //             setLoading(false);
    //         });
    // }, []);

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error.message}</p>;

  

{/* <div className="container mt-4">
<h2>Farmers</h2>
<div className="table-responsive">
    <table className="table table-striped table-bordered">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
        </thead>
        <tbody>
            {farmers.length > 0 ? (
                farmers.map(farmer => (
                    <tr key={farmer.id}>
                        <td>{farmer.id}</td>
                        <td>{farmer.firstName}</td>
                        <td>{farmer.lastName}</td>
                        <td>{farmer.rating}</td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan="4" className="text-center">No farmers found.</td>
                </tr>
            )}
        </tbody>
    </table>
</div>
</div> */}