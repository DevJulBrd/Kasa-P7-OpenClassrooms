import { useState } from "react"
import leftArrow from '../../assets/left-arrow.png'
import rightArrow from '../../assets/right-arrow.png'



function Gallery ({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0)


    const sliderStyles = {
        height: '255px',
        position: 'relative'
    }
    
    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex]})`
    }

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '10px',
        cursor: 'pointer',
    }

    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '10px',
        cursor: 'pointer',
    }

    const goPrevious = () => {
        const firstSlide = currentIndex === 0
        const newIndex = firstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const goNext = () => {
        const lastSlide = currentIndex === slides.length - 1 
        const newIndex = lastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const counter = () => {
        const number = currentIndex + 1

        return number
    }

    const counterStyles = {
        position: 'absolute',
        bottom: '5%',
        left: '50%',
        color: '#fff',

    }

    return (
        <section className='gallery-container'>
            { 
                slides.length === 1 ? (
                <div style={sliderStyles}>
                    <div style={slideStyles}></div>
                </div>
            ) : (
                <div style={sliderStyles}>
                    <div style={leftArrowStyles} onClick={goPrevious}><img src={leftArrow} alt='Flèche pour changer de visuel' /></div>
                    <div style={rightArrowStyles} onClick={goNext}><img src={rightArrow} alt='Flèche pour changer de visuel' /></div>
                    <div style={counterStyles}>{counter()}/{slides.length}</div>
                    <div style={slideStyles}></div>
                </div>    
            )
            }
        </section>
    )
}


export default Gallery