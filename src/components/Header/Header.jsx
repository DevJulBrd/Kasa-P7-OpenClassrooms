import { Link } from 'react-router-dom'

import Logo from './Logo'
import './Header.css'

function Header() {
    return (
        <header className='header-container'>
            <Logo />
            <nav className='links-container'>
                <Link to='/' className='link'>Accueil</Link>
                <Link to='/apropos' className='link'>A propos</Link>
            </nav> 
        </header>
    )
}

export default Header