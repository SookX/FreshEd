import { useContext, useEffect, useState } from 'react'
import '../css/header.css'
import { Link } from 'react-router-dom'
import { DataContext } from '../context/DataContext'

import pfp from '../img/pfp.png'

const Header = () => {
    const { loggedIn, setLoggedIn, sticky, setSticky } = useContext(DataContext)


    // DROPDOWN
    const [dropdown, setDropdown] = useState(false)

    const handleCollapse = (e) => {
        const dropdownContainer = document.querySelector('.nav-pfp-container')

        if (!dropdownContainer.contains(e.target) || e.target.classList.contains('dropdown-link')) setDropdown(false)
    }

    document.addEventListener('click', (e) => dropdown ? handleCollapse(e) : null)

    useEffect(() => {
        if (loggedIn) setDropdown(false)
    }, [loggedIn])




    // STICKY
    // const [sticky, setSticky] = useState(false)

    const handleScroll = () => {
        if (!sticky && window.scrollY > 50) setSticky(true)
        if (sticky && window.scrollY < 50) setSticky(false)
    }

    window.addEventListener('scroll', handleScroll)

    useEffect(() => {
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={sticky ? "main-header-container sticky" : "main-header-container"}>
            <div className="main-header">
                <nav className="main-nav">
                    <ul className="main-nav-list">
                        <li><Link to='/' className='main-nav-link'>Home</Link></li>
                        <li><Link to='/' className='main-nav-link'>About us</Link></li>
                        <li><Link to='/' className='main-nav-link'>Contact us</Link></li>
                        <li><Link to='/dashboard' className='main-nav-link'>Dashboard</Link></li>
                    </ul>
                </nav>

                <nav className='account-nav'>
                    {
                        loggedIn ?
                            <div className="nav-pfp-container">
                                <img src={pfp} alt="pfp" className='nav-pfp' onClick={() => setDropdown(!dropdown)} />

                                {
                                    dropdown ?
                                        <nav className='dropdown-nav'>
                                            <ul>
                                                <li><Link to='/dashboard/myprofile' className='dropdown-link'>My Profile</Link></li>
                                                <li><Link to='/dashboard' className='dropdown-link'>My Grades</Link></li>
                                                <li><Link to='/' className='dropdown-link' onClick={() => setLoggedIn(false)}>Log Out</Link></li>
                                            </ul>
                                        </nav>
                                        :
                                        null
                                }
                            </div>
                            :
                            <ul className='main-nav-list'>
                                <li><Link to='/login' className='main-nav-link'>Log In</Link></li>
                                <li><Link to='/register' className='main-nav-link'>Sign Up</Link></li>
                            </ul>
                    }
                </nav>
            </div>
        </header>
    )
}

export default Header