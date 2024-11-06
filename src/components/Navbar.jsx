import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div id='logo'>
        <img src="/diet.webp" alt="logo" width={50} />
      <h2>Dishcovery</h2>
      </div>
      <Link to={"/"}>

        Home</Link>
    </nav>
  )
}

export default Navbar