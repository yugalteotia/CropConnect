import 'bootstrap/dist/css/bootstrap.min.css'; 
import GovernmentSchemeTable from './GovernmentSchemeTable';
import Hero from './Hero';

const pageStyles = {
  backgroundColor: '#d4edda',
  minHeight: '100vh', 
};

function Home() {
    return (
        <div style={pageStyles}>
            <Hero />
            <hr className="my-8 border-t-2 border-gray-700" />
            <GovernmentSchemeTable />
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