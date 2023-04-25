import './About.css'
import Banner from '../../components/Banner/Banner'
import DropDown from '../../components/DropDown/DropDown'
import cover from '../../assets/img-banner-about.png'

function About () {

    const fiability = 'Fiabilité'
    const fiabilityText = 'Les annonces porstées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes.'

    const respect = 'Respect'
    const respectText = 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'

    const serve = 'Service'
    const serveText = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hesitez pas à nous contacter si vous avez la moindre question."

    const security = 'Sécurité'
    const securityText = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."

    return (
        <main className="about-container">
            <Banner
                cover={cover}
            />
            <DropDown 
                title ={fiability}
                text = {fiabilityText}
            />
            <DropDown 
                title ={respect}
                text = {respectText}
            />
            <DropDown 
                title ={serve}
                text = {serveText}
            />
            <DropDown 
                title ={security}
                text = {securityText}
            />
        </main>
    )
}

export default About