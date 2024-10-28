import React from 'react'
import './Header.css'
function Header({user , isAuthenticated}) {
  return (
    <div className='header'>
    <div className='header-logo'>MyApp</div>
    <div className='header-user'>
      {isAuthenticated ? (
        <>
          <span className='user-name'>Hello, </span>
          <button className='header-auth'>Logout</button>
        </>
      ) : (
        <button className='header-auth'>Login</button>
      )}
    </div>
  </div>
  )
}

export default Header