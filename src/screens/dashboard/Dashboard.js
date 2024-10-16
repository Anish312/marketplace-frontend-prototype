import React, { useEffect } from 'react'
import "./Dashboard.css"
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
  }, [dispatch ]);
  return (
    <div className='dashboard'>   
        <div > 
        {marketplaces?.length > 0 ? (
          marketplaces.map((item) => (
            <Link to={`/console/${item._id}`} key={item._id}>

            <div key={item.id}> {/* Add a unique key for each item */}
              {item.marketplaceName}
            </div>

            </Link>
          ))
        ) : (
          <p>No marketplaces available</p>
        )}
         
        </div>
    </div>
  )
}

export default Dashboard