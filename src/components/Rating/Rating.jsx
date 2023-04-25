import redStar from '../../assets/red-star.png'
import greyStar from '../../assets/grey-star.png'

function Rating ({ rate }) {
    const range = [1, 2, 3, 4, 5]


    return (
        <div className='rating-container'>
            {range.map((rangeElem) =>
                rate >= rangeElem ? (
                    <img key={rangeElem.toString()} src={redStar} alt='Etoile rouge' className='red-star' />
                ) : <img key={rangeElem.toString()} src={greyStar} alt='Etoile grise' className='grey-star' />
            )}
        </div>
    )
}


export default Rating