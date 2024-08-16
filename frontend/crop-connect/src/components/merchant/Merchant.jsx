import React,{useState} from 'react';
import axios from "axios";
import MerchantList from './MerchantList';
// import Footer from '../home/Footer';
import NavigationBar from '../home/NavigationBar';
import SearchBar from '../home/SearchBar';

function Merchant() {

  const [cropData, setCropData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // Add search query state

  const handleSearch = async (keyword) => {
    try {
      const response = await axios.get(`/api/crops/search?keyword=${keyword}`);
      setCropData(response.data); // Update cropData with the search results
      setSearchQuery(keyword); // Update search query state
    } catch (error) {
      console.error("Error searching for crops:", error);
    }
  };

  return (
    <>
<<<<<<< HEAD
    <SearchBar onSearch={handleSearch} />
=======
   
>>>>>>> e8121ed96389ad5de05a2c8c75c069657793c5ba
    <div className="p-10 bg-gray-100 min-h-screen flex justify-center">
      <MerchantList cropsData={cropData} searchQuery={searchQuery} />
    </div>
   

    </>

  );
}

export default Merchant;
