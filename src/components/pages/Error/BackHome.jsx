import { Link } from 'react-router-dom'

import '../../../styles/BackHome.css'

function BackHome() {
    return (
        <nav className='backhome-nav'>
            <Link to='/' className='backhome-link'>Retourner sur la page d'accueil</Link>
        </nav>
    )
}

export default BackHome