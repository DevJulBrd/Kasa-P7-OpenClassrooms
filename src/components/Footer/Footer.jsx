import './Footer.css'
import Logo from '../Logo/Logo'
import cover from '../../assets/logo-footer.png'

function Footer() {
    return (
        <footer className='footer-container'>
            <div className='footer-logo-container'>
                <Logo
                    cover={cover} 
                />
            </div>
            
            <p className='footer-text'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer