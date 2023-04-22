import './Banner-home.css'
import banner from '../../assets/img-banner.png'

function Banner() {
    return (
        <section className='banner-container'>
            <div className='relative-container'>
                <img src={banner} alt='Logo Kasa' className='banner' />
                <h1 className='banner-title'>Chez vous,<br className='banner-line-title' /> partout et ailleurs</h1>
            </div>
            
        </section>
    )
}

export default Banner