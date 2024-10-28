import React, { useEffect } from 'react';
import "./Dashboard.css";
import { useSelector, useDispatch } from "react-redux";
import { getAllMarketplace } from '../../actions/marketplaceAction';
import { Link } from 'react-router-dom';

function Dashboard() {
  const dispatch = useDispatch();
  
  const {
    marketplaces,
    error,
  } = useSelector((state) => state.marketplaces);

  useEffect(() => {
    dispatch(getAllMarketplace());
  }, [dispatch]);

  return (
    <div className='dashboard'>   
      <div className='marketplace-container'> 
        {marketplaces?.length > 0 ? (
          marketplaces.map((item) => (
            <Link to={`/console/${item._id}`} className='marketplace-link' key={item._id}>
              <div className='marketplace-item'>
                {item.marketplaceName}
              </div>
            </Link>
          ))
        ) : (
          <p className='no-marketplaces'>No marketplaces available</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
