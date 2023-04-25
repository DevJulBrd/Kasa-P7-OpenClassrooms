import { Link } from 'react-router-dom'

import Logo from '../Logo/Logo'
import './Header.css'
import cover from '../../assets/logo-header.svg'

function Header() {
    return (
        <header className='header-container'>
            <div className='header-logo-container'>
                <Logo 
                    cover={cover}
                />
            </div>
            <nav className='links-container'>
                <Link to='/' className='link'>Accueil</Link>
                <Link to='/about' className='link'>A propos</Link>
            </nav> 
        </header>
    )
}

export default Header