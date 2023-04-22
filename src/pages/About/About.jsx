import './About.css'
import BannerAbout from '../../components/Banner-about/Banner'
import Explen from '../../components/Explen-about/Explen'

function About () {
    return (
        <main className="about-container">
            <BannerAbout />
            <Explen />
        </main>
    )
}

export default About