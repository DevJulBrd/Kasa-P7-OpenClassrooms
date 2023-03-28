import '../../../styles/Explen.css'
import vector from '../../../assets/vector.png'

function Explen() {
    return (
        <section className='explen-container'>
            <article className='explen-contain'>
                <div className='explen-animation'>
                    <h2 className='explen-title'>Fiabilité</h2>
                    <img src={vector} alt='flèche vers le bas' className='explen-vector' />
                </div>
                <p className='explen-text'>Les annonces porstées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
            </article>
            <article className='explen-contain'>
                <div className='explen-animation'>
                    <h2 className='explen-title'>Respect</h2>
                    <img src={vector} alt='flèche vers le bas' className='explen-vector' />
                </div>
                <p className='explen-text'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </article>
            <article className='explen-contain'>
                <div className='explen-animation'>
                    <h2 className='explen-title'>Service</h2>
                    <img src={vector} alt='flèche vers le bas' className='explen-vector' />
                </div>
                <p className='explen-text'>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hesitez pas à nous contacter si vous avez la moindre question.</p>
            </article>
            <article className='explen-contain'>
                <div className='explen-animation'>
                    <h2 className='explen-title'>Sécurité</h2>
                    <img src={vector} alt='flèche vers le bas' className='explen-vector' />
                </div>
                <p className='explen-text'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une notte aussi bien à l'hôte qu'ai locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            </article>
        </section>
    )
}

export default Explen