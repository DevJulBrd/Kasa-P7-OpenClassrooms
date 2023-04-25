import './Logo.css'

function Logo ({ cover }) {
    return (
        <img src={cover} alt='Logo de Kasa' className='logo' />
    )
}

export default Logo