import cover from '../../assets/img-banner-about.png'
import './Banner-about.css'

function BannerAbout() {
    return (
        <section className='banner-about-container'>
            <img src={cover} alt='Paysage' className='banner-about-cover' />
        </section>
    )
}

export default BannerAbout
 