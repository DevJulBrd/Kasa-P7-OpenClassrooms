import '../../../styles/Home.css'
import Banner from "./Banner"
import Shoppinglist from './Shoppinglist'

function Home() {
    return (
        <main className="home-container">
            <Banner />
            <Shoppinglist />
        </main>
    )
}

export default Home