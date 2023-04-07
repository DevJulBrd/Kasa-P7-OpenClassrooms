import '../../../styles/Housing.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import redStar from '../../../assets/red-star.png'
import vector from '../../../assets/vector.png'




function Housing() {
    const [houses, setHouses]= useState([])
    const {id} = useParams()
    console.log('id', id)

    useEffect(() => {
        async function fetchHouses(){
            await fetch('/data/logement.json')
            .then((response) => response.json())
            .then((res) => setHouses(res))
            .catch((error) => console.log(error))
            
        }
        fetchHouses()
    }, [])

    console.log('houses', houses)

    const house = houses.find(house => house.id === id)
   console.log('house', house)

   const range = [1, 2, 3, 4, 5]


    return (
        <main className='housing-container'>
            <section className='gallery-container'>
                {house && (
                    house.pictures.map((picture) => (
                        <img key={picture} src={picture} alt={`Visuel de la location ${house.title}`} className='gallery-cover' />
                    ))
                )}
            </section>
            <section className='data-container'>
                <h1 className='title'>{house.title}</h1>
                <p className='location'>{house.location}</p>
                <div className='tag-container'>
                    {house && (
                        house.tags.map((tag) => (
                            <span key={tag} className='tag'>{tag}</span>
                        ))
                    )}
                </div> 
                <div className='rating-host-container'>
                    <div className='rating-container'>
                        {range.map((rangeElem) =>
                            house.rating >= rangeElem ? (
                                <img key={rangeElem.toString()} src={redStar} alt='Etoile rouge' className='red-star' />
                            ) : null
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
                        {house && (
                            house.equipments.map((equipment) => (
                                <span key={equipment} className='equipment'>{equipment}</span>
                            ))
                        )}
                    </p>
                </div> 
            </section> 
        </main>
    )
}


export default Housing 
 