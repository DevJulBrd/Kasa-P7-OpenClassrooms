import { useState } from 'react';
import './Explen.css'
import vectorUp from '../../assets/vector-up.png'
import vectorDown from '../../assets/vector-down.png'

function Explen() {

    const [isOpenC, setIsOpenC] = useState(false)
    const [isOpenD, setIsOpenD] = useState(false)
    const [isOpenE, setIsOpenE] = useState(false)
    const [isOpenF, setIsOpenF] = useState(false)




    return (
        <section className='explen-container'>
            {isOpenC ? (
                <article 
                    className='explen-contain'
                    onClick={() => setIsOpenC(false)}
                >
                    <div className='explen-animation'>
                        <h2 className='explen-title'>Fiabilité</h2>
                        <img src={vectorUp} alt='flèche vers le bas' className='explen-vector' />
                    </div>
                    <p className='explen-text'>Les annonces porstées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                </article>
            ) : (
                <article 
                    className='explen-contain'
                    onClick={() => setIsOpenC(true)}
                >
                    <div className='explen-animation'>
                        <h2 className='explen-title'>Fiabilité</h2>
                        <img src={vectorDown} alt='flèche vers le bas' className='explen-vector' />
                    </div>
                </article>
            )}
            {isOpenD ? (
                <article 
                    className='explen-contain'
                    onClick={() => setIsOpenD(false)}
                >
                    <div className='explen-animation'>
                        <h2 className='explen-title'>Respect</h2>
                        <img src={vectorUp} alt='flèche vers le bas' className='explen-vector' />
                    </div>
                    <p className='explen-text'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </article>
            ) : (
                <article 
                    className='explen-contain'
                    onClick={() => setIsOpenD(true)}
                >
                    <div className='explen-animation'>
                        <h2 className='explen-title'>Respect</h2>
                        <img src={vectorDown} alt='flèche vers le bas' className='explen-vector' />
                    </div>
                </article>
            )}
            {isOpenE ? (
                <article 
                    className='explen-contain'
                    onClick={() => setIsOpenE(false)}
                >
                    <div className='explen-animation'>
                        <h2 className='explen-title'>Service</h2>
                        <img src={vectorUp} alt='flèche vers le bas' className='explen-vector' />
                    </div>
                    <p className='explen-text'>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hesitez pas à nous contacter si vous avez la moindre question.</p>
                </article>
            ) : (
                <article 
                    className='explen-contain'
                    onClick={() => setIsOpenE(true)}
                >
                    <div className='explen-animation'>
                        <h2 className='explen-title'>Service</h2>
                        <img src={vectorDown} alt='flèche vers le bas' className='explen-vector' />
                    </div>
                </article>
            )}
            {isOpenF ? (
                <article 
                    className='explen-contain'
                    onClick={() => setIsOpenF(false)}
                >
                    <div className='explen-animation'>
                        <h2 className='explen-title'>Sécurité</h2>
                        <img src={vectorUp} alt='flèche vers le bas' className='explen-vector' />
                    </div>
                    <p className='explen-text'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </article>
            ) : (
                <article 
                    className='explen-contain'
                    onClick={() => setIsOpenF(true)}
                >
                    <div className='explen-animation'>
                        <h2 className='explen-title'>Sécurité</h2>
                        <img src={vectorDown} alt='flèche vers le bas' className='explen-vector' />
                    </div>
                </article>
            )}
        </section>
    )
}

export default Explen