import React, { useState } from 'react';
import './Sidebar.css';
import { consoleUserLogin } from '../../actions/mpUserAction';
import { useDispatch } from 'react-redux';

function Sidebar({ logedUserDetails, marketplaceUsers, onSelection }) {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const handleUserSelect = (user) => {
    setSelectedUser(user);
    onSelection(user);
    setIsDropdownOpen(false); 
    dispatch(consoleUserLogin('new2@new.com', '123456'));
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className='sidebar'>
      <div className='allUsers-sidebar'>
        <h3>Select User</h3>
        <div className='custom-dropdown'>
          <button className='dropdown-btn' onClick={toggleDropdown}>
            {selectedUser ? selectedUser.name : 'Select a User'}
          </button>
          {isDropdownOpen && (
            <div className='dropdown-content'>
              {marketplaceUsers.map((user, index) => (
                <div
                  key={index}
                  className='dropdown-item'
                  onClick={() => handleUserSelect(user)}
                >
                  {user.name} ({user.type})
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
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
          <h4 className='api-sidebar-option' onClick={() => onSelection('product')}>Products</h4>
          <h4 className='api-sidebar-option' onClick={() => onSelection('category')}>Categories</h4>
        </div>
        <div className='apis-container-sidebar'>
          <p>Me and My Stuff</p>
          <h4 className='api-sidebar-option' onClick={() => onSelection('me')}>Me</h4>
          <h4 className='api-sidebar-option' onClick={() => onSelection('address')}>My Addresses</h4>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
