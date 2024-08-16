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