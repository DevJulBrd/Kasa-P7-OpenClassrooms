import '../../../styles/Home.css'
import React from "react"
import Banner from "./Banner"
import HomeItem from './HomeItem'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

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
console.log(houses)


    return (
        <main className="home-container">
            <Banner />
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