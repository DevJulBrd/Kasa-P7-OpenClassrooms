import logo from '../../assets/logo-footer.png'
import './Logo-footer.css'

function Logo() {
    return (
        <div className='footer-logo-container'>
            <img src={logo} alt='Logo de Kasa' className='logo' />
        </div>
    )
}

export default Logo