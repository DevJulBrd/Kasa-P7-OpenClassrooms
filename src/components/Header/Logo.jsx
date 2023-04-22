import logo from '../../assets/logo-header.svg'
import './Logo-header.css'

function Logo() {
    return (
        <div className='header-logo-container'>
            <img src={logo} alt='Logo de Kasa' className='logo' />
        </div>
    )
}

export default Logo