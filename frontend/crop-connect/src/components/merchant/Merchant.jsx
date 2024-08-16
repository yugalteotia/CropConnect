import React,{useState} from 'react';
import axios from "axios";
import MerchantList from './MerchantList';
// import Footer from '../home/Footer';
import NavigationBar from '../home/NavigationBar';
import SearchBar from '../home/SearchBar';
import { useNavigate } from 'react-router-dom';

function Merchant() {

  const [cropData, setCropData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // Add search query state
  const navigate = useNavigate();

  const handleSearch = async (keyword) => {
    try {
      const response = await axios.get(`/api/crops/search?keyword=${keyword}`);
      setCropData(response.data); // Update cropData with the search results
      setSearchQuery(keyword); // Update search query state
    } catch (error) {
      console.error("Error searching for crops:", error);
    }
  };

  const goToCart = () =>{
    navigate("/cart")
  }
  return (

    <>
    <SearchBar
          onSearch={handleSearch}
          className="flex-grow" // Make SearchBar grow to take up available space
        />

    <div className="p-10 bg-gray-100 min-h-screen flex flex-col">
      <div className="flex items-center mb-4">
        
        <button
          onClick={goToCart}
          className="bg-cyan-500 text-white font-bold py-2 px-4 w-40 rounded-full ml-auto"
        >
          View Cart
        </button>
      </div>
      <div className="flex justify-center">
        <MerchantList cropsData={cropData} searchQuery={searchQuery} />
      </div>
    </div>
  </>

  );
}

export default Merchant;
