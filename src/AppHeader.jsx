import React from 'react'
import { NavLink } from 'react-router-dom'


const AppHeader = () => {
  return (
    <header className="app--header">
      <h1>React App Challenges</h1>
      <nav className="app--nav">
        <NavLink to="/games">Games</NavLink>
        <NavLink to="/screen-two">Screen Two</NavLink>
        <NavLink to="/screen-three">Screen Three</NavLink>
      </nav>
    </header>
  )
}

export default AppHeader