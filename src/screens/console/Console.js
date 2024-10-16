import React, { useEffect, useState } from 'react';
import "./Console.css";
import { useParams } from 'react-router-dom';
import { getMarketplaceDetails } from '../../actions/marketplaceAction';
import { useDispatch, useSelector } from 'react-redux';
import { marketplaceUserLogin } from '../../actions/mpUserAction';
import Sidebar from '../../components/sidebar/Sidebar';
import RequestSection from '../../components/requestSection/RequestSection';
import ResponseSection from '../../components/responseSection/ResponseSection';

function Console() {
  const { marketplaceId } = useParams();
  const dispatch = useDispatch();
  const { isAuthenticated, mpUser } = useSelector((state) => state.marketplaceUser);

  const [selectedOption, setSelectedOption] = useState(null); 
  const [responseData, setResponseData] = useState(null); 

  useEffect(() => {
    dispatch(getMarketplaceDetails(marketplaceId));
    dispatch(marketplaceUserLogin());
  }, [marketplaceId]);
  const [selectedSection, setSelectedSection] = useState(); // Track selected section

  const handleSidebarSelection = (option) => {
    setSelectedSection("")
    setSelectedOption(option); 
    
  };

  return (
    <div className='console'>
      <Sidebar logedUserDetails={mpUser} onSelection={handleSidebarSelection} /> {/* Pass handler */}
      <RequestSection 
        selectedOption={selectedOption} 
        setSelectedOption={setSelectedOption} 
        setResponseData={setResponseData} 
        setSelectedSection={setSelectedSection}
        selectedSection={selectedSection}
      />
      <ResponseSection responseData={responseData || {}} /> 
    </div>
  );
}

export default Console;
