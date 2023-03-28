import '../../../styles/Banner-home.css'
import banner from '../../../assets/img-banner.png'

function Banner() {
    return (
        <section className='banner-container'>
            <img src={banner} alt='Logo Kasa' className='banner' />
            <h1 className='banner-title'>Chez vous,<br className='banner-line-title' /> partout et ailleurs</h1>
        </section>
    )
}

export default Banner