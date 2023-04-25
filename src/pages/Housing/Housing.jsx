import { useEffect, useState } from 'react';
import './Housing.css'
import { useParams,useNavigate } from 'react-router-dom'


import Gallery from '../../components/Gallery/Gallery'
import DropDown from '../../components/DropDown/DropDown';
import Rating from '../../components/Rating/Rating'






function Housing() {
    const params = useParams()
    const [house, setHouse]= useState()
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
   
    const slides = house.pictures


    const equipment = 'Equipements'
    const description = 'Description'


    return (
        <main className='housing-container'>
            <Gallery 
                slides={slides}
            />
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
                        <Rating
                            rate={house.rating}
                        />
                        <div className='host-container'>
                            <span className='host-name'>{house.host.name}</span>
                            <img src={house.host.picture} alt={`Profile de ${house.host.name}`} className='host-picture' /> 
                        </div>
                    </div>
                </div>
                <div className='description-block'>
                        <div className='description-container'>
                        <DropDown
                            title={description} 
                            text={house.description}  
                        /> 
                        </div> 
                    <div className='description-container'>
                        <DropDown
                            title={equipment} 
                            list={house.equipments}  
                        /> 
                    </div>
                </div>
            </section>
        </main>
    )
}


export default Housing 


 