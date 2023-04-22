import './HomeItem.css'

function HomeItem({cover, title}) {
    return (
        <div className='homeItem-container'>
            <img src={cover} alt={`${title} cover`} className='homeItem-cover' />
            <div className='homeItem-shadow'>
                <h2 className='homeItem-title'>{title}</h2>
            </div>
        </div>
    ) 
}

export default HomeItem