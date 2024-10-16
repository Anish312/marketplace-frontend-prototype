import React from 'react';
import './Sidebar.css';

function Sidebar({ logedUserDetails, onSelection }) {
  return (
    <div className='sidebar'>
      <div className='userDetails-sidebar'>
        {logedUserDetails ? (
          <div>
            <h2>User Info:</h2>
            <p>Name: {logedUserDetails.name}</p>
            <p>Email: {logedUserDetails.email}</p>
            <p className='sidebar-token'>Token: {localStorage.getItem('token')}</p>
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>

      <div className='allApis-sidebar'>
        <div className='apis-container-sidebar'>
          <p>Products Catalog</p>
          <h4 className='api-sidebar-option' onClick={() => onSelection('product')}>Products</h4> {/* Set selected option to 'product' */}
          <h4 className='api-sidebar-option'  onClick={() => onSelection('category')}>Categories</h4> {/* Set selected option to 'category' */}
        </div>
        <div className='apis-container-sidebar'>
          <p>Me and My Stuff</p>
          <h4 className='api-sidebar-option'  onClick={() => onSelection('me')}>Me</h4> {/* Example for another option */}
          <h4 className='api-sidebar-option'  onClick={() => onSelection('address')}>My Addresses</h4> {/* Example for another option */}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
