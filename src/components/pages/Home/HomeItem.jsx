import '../../../styles/HomeItem.css'

function HomeItem({cover, title}) {
    return (
        <div className='homeItem-container'>
            <img src={cover} alt={`${title} cover`} className='homeItem-cover' />
            <div className='homeItem-shadow'></div>
            <h2 className='homeItem-title'>{title}</h2>
        </div>
    ) 
}

export default HomeItem