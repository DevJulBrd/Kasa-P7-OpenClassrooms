import { useEffect, useState } from 'react';
import '../../../styles/Housing.css'
import { useParams,useNavigate } from 'react-router-dom'
import redStar from '../../../assets/red-star.png'
import greyStar from '../../../assets/grey-star.png'
import vector from '../../../assets/vector.png'
import leftArrow from '../../../assets/left-arrow.png'
import rightArrow from '../../../assets/right-arrow.png'





function Housing() {
    const params = useParams()
    const [house, setHouse]= useState()
    const [currentIndex, setCurrentIndex] = useState(0)
    const navigate = useNavigate()
    console.log(params.id)

    useEffect(() => {
        (async () =>{
            let result = await fetch('/data/logement.json')
            .then((response) => response.json())
            .catch((error) => console.log(error))
            setHouse(result.find(house => house.id === params.id))    
        })();
    }, [params, navigate])

    

    


    const range = [1, 2, 3, 4, 5]

    console.log(house)

    if(!house) return navigate('/*')

    const slides = house.pictures
    console.log('slides', slides)

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
        const newIndex = firstSlide ? slides.lenght - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const goNext = () => {
        const lastSlide = currentIndex === slides.lenght - 1 
        const newIndex = lastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    return (

        <main className='housing-container'>
            <section className='gallery-container'>
                <div style={sliderStyles}>
                    <div style={leftArrowStyles} onClick={goPrevious}><img src={leftArrow} alt='Flèche pour changer de visuel' /></div>
                    <div style={rightArrowStyles} onClick={goNext}><img src={rightArrow} alt='Flèche pour changer de visuel' /></div>
                    <div style={slideStyles}></div>
                </div> 
            </section>
            <section className='data-container'>
                <h1 className='title'>{house.title}</h1>
                <p className='location'>{ house.location}</p>
                <div className='tag-container'>
                    {
                        house.tags.map((tag) => (
                            <div key={tag} className='tag'>{tag}</div>
                        ))
                    }
                </div> 
                <div className='rating-host-container'>
                    <div className='rating-container'>
                        {range.map((rangeElem) =>
                            house.rating >= rangeElem ? (
                                <img key={rangeElem.toString()} src={redStar} alt='Etoile rouge' className='red-star' />
                            ) : <img key={rangeElem.toString()} src={greyStar} alt='Etoile rouge' className='grey-star' />
                        )}
                    </div>
                    <div className='host-container'>
                        <span className='host-name'>{house.host.name}</span>
                        <img src={house.host.picture} alt={`Profile de ${house.host.name}`} className='host-picture' /> 
                    </div>
                </div>
                <div className='description-container'>
                    <div className='annimation'>
                        <h2 className='description-title'>Description</h2>
                        <img src={vector} alt='Flèche' className='description-vector' />
                    </div>
                    <p className='description-text'>{house.description}</p>
                </div>  
                <div className='description-container'>
                    <div className='annimation'>
                        <h2 className='description-title'>Equipements</h2>
                        <img src={vector} alt='Flèche' className='description-vector' />
                    </div>
                    <p className='equipment-text'>
                        {
                            house.equipments.map((equipment) => (
                                <span key={equipment} className='equipment'>{equipment}</span>
                            ))
                        }
                    </p>
                </div> 
            </section>
        </main>
    )
}


export default Housing 
 