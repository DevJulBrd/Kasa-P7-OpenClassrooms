import '../../../styles/Shoppinglist.css'
/*import HomeItem from './HomeItem'
import { Link } from 'react-router-dom'*/
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



function Shoppinglist() {

    const { id } = useParams()
    const [element, setElement] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchElement() {
            try {
                const response = await fetch('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json', {
                    method: 'HEAD',
                    mode: 'no-cors'
                })
                if(!response.ok) {
                    throw new Error(`Error ${response.status}`)
                }
                const data = await response.json()
                setElement(data)
            }
            catch (error){
                setError(error)
            }
        }
        fetchElement()
    }, [id])
    
console.log('element', element)
console.log('error', error)

    return (
        <section className='shoppingList-container'>
            <nav className='shoppingList-list'>
                {/*data.map(({id, cover, title}) =>
                    <Link to='/housing' key={id} className='shoppingList-cart' >
                        <HomeItem
                            cover={cover}
                            title={title}
                        />      
                    </Link>
                )*/}
            </nav>
        </section>
    )
}

export default Shoppinglist