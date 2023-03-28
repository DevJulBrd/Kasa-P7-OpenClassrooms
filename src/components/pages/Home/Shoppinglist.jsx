import '../../../styles/Shoppinglist.css'
import { homeList } from '../../../data/Homelist'
import HomeItem from './HomeItem'


function Shoppinglist() {
    return (
        <section className='shoppingList-container'>
            <ul className='shoppingList-list'>
                {homeList.map(({id, cover, title}) =>
                    <article className='shoppingList-cart' key={id}>
                        <HomeItem
                            cover={cover}
                            title={title}
                        />      
                    </article>
                )}
            </ul>
        </section>
    )
}

export default Shoppinglist