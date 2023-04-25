import { useState } from "react"
import vectorUp from '../../assets/vector-up.png'
import vectorDown from '../../assets/vector-down.png'
import './DropDown.css'

function DropDown ({ title, text, list}) {
    const [isOpen, setIsOpen] = useState(false)


    return (
        <section className='dropdown-container'>
            {isOpen ? (
                <article 
                    className='dropdown-contain'
                    onClick={() => setIsOpen(false)}
                >
                    <div className='dropdown-animation'>
                        <h2 className='dropdown-title'>{title}</h2>
                        <img src={vectorUp} alt='flèche vers le bas' className='dropdown-vector' />
                    </div>
                    {list ? (
                        list.map((list) =>
                            <p className="dropdown-text"><span>{list}</span></p>
                        )
                    ) : (
                        <p className="dropdown-text">{text}</p>
                    )}
                    
                </article>
            ) : (
                <article 
                    className='dropdown-contain'
                    onClick={() => setIsOpen(true)}
                >
                    <div className='dropdown-animation'>
                        <h2 className='dropdown-title'>{title}</h2>
                        <img src={vectorDown} alt='flèche vers le bas' className='dropdown-vector' />
                    </div>
                </article>
            )}
        </section>
    )
}

export default DropDown 