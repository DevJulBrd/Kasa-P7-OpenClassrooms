import { useEffect, useState } from 'react';
import './Housing.css'
import { useParams,useNavigate } from 'react-router-dom'
import redStar from '../../assets/red-star.png'
import greyStar from '../../assets/grey-star.png'
import vectorUp from '../../assets/vector-up.png'
import vectorDown from '../../assets/vector-down.png'
import leftArrow from '../../assets/left-arrow.png'
import rightArrow from '../../assets/right-arrow.png'






function Housing() {
    const params = useParams()
    const [house, setHouse]= useState()
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isOpenA, setIsOpenA] = useState(false)
    const [isOpenB, setIsOpenB] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        (async () =>{
            let result = await fetch('/data/logement.json')
            .then((response) => response.json())
            .catch((error) => console.log(error))
            setHouse(result.find(house => house.id === params.id))
            if (!result.find(house => house.id === params.id)) {
                navigate('*')
            }
        })();
    }, [params, navigate])
       
    if (!house) return <div></div>

    const range = [1, 2, 3, 4, 5]
   

    const slides = house.pictures


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
        <main className='housing-container'>
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
            <section className='data-container'>
                <div className='infos-container'>
                    <div className='title-location-tag-container'>
                        <h1 className='title'>{house.title}</h1>
                        <p className='location'>{ house.location}</p>
                        <div className='tag-container'>
                            {
                                house.tags.map((tag) => (
                                    <div key={tag} className='tag'>{tag}</div>
                                ))
                            }
                        </div> 
                    </div>
                    <div className='rating-host-container'>
                        <div className='rating-container'>
                            {range.map((rangeElem) =>
                                house.rating >= rangeElem ? (
                                    <img key={rangeElem.toString()} src={redStar} alt='Etoile rouge' className='red-star' />
                                ) : <img key={rangeElem.toString()} src={greyStar} alt='Etoile grise' className='grey-star' />
                            )}
                        </div>
                        <div className='host-container'>
                            <span className='host-name'>{house.host.name}</span>
                            <img src={house.host.picture} alt={`Profile de ${house.host.name}`} className='host-picture' /> 
                        </div>
                    </div>
                </div>
                <div className='description-block'>
                    {isOpenB ? (
                        <div className='description-container'>
                            <div 
                                className='annimation'
                                onClick={() => setIsOpenB(false)}
                            >
                                <h2 className='description-title'>Description</h2>
                                <img src={vectorUp} alt='Flèche' className='description-vector' />
                            </div>
                            <p className='description-text'>{house.description}</p>
                        </div>
                    ) : (
                        <div className='description-container'>
                            <div 
                                className='annimation'
                                onClick={() => setIsOpenB(true)}
                            >
                                <h2 className='description-title'>Description</h2>
                                <img src={vectorDown} alt='Flèche' className='description-vector' />
                            </div>
                        </div>
                    )}  
                    
                    {isOpenA ? (
                        <div className='description-container'>
                            <div 
                                className='annimation'
                                onClick={() => setIsOpenA(false)}
                            >
                                <h2 className='description-title'>Equipements</h2>
                                <img src={vectorUp} alt='Flèche' className='description-vector' />
                            </div>
                        
                            <p className='equipment-text'>
                                {
                                    house.equipments.map((equipment) => (
                                        <span key={equipment} className='equipment'>{equipment}</span>
                                    ))
                                }
                            </p>
                        </div>
                        ) : (
                            <div className='description-container'>
                                <div 
                                    className='annimation'
                                    onClick={() => setIsOpenA(true)}
                                >
                                    <h2 className='description-title'>Equipements</h2>
                                    <img src={vectorDown} alt='Flèche' className='description-vector' />
                                </div>
                            </div>    
                        )}
                </div>
            </section>
        </main>
    )
}


export default Housing 
 