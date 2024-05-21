import React from 'react'

const Header = () => {
  return (
    <nav className="bg-white shadow p-4">
    <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
            <img src="savan-logo.png" alt="logo" width={37} />
            <Link to="/" className="font-extrabold text-lg ml-2">JioSaavn</Link>
        </div>
        <div>
            <Link to="/login" className="text-black">Log In</Link>
        </div>
    </div>
</nav>
  )
}

export default Header;
