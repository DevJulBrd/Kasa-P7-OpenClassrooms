import './Home.css'
import React from "react"
import Banner from "../../components/Banner/Banner"
import HomeItem from '../../components/HomeItem/HomeItem'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import cover from '../../assets/img-banner.png'

function Home() {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        async function fetchHouses(){
            let result = await fetch('/data/logement.json')
            .then((response) => response.json())
            .catch((error) => console.log(error))
            setHouses(result)
        }
        fetchHouses()
    }, [])

    const title = "Chez vous, partout et ailleurs"


    return (
        <main className="home-container">
            <Banner 
                title={title}
                cover={cover}
            />
            <section className='home-shoppingList-container'>
                {houses.map(({id, index, cover, title}) =>
                    <article key={`${id}-${index}`} className='home-shoppingList-list'>
                        <Link to={`/housing/${id}`}  className='shoppingList-cart'>
                            <HomeItem
                                cover={cover}
                                title={title}
                            />
                        </Link>
                    </article>
                )}
            </section>   
        </main>
    )
}

export default Home