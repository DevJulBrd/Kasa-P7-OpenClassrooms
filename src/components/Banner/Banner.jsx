import './Banner.css'

function Banner({ cover, title }) {
    return (
        <section className='banner-container'>
            <div className='relative-container'>
                <img src={cover} alt='Logo Kasa' className='banner' />
                <h1 className='banner-title'>{title}</h1>
            </div>
            
        </section>
    )
}

export default Banner



