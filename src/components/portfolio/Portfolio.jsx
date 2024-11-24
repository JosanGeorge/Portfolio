import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/blog1.webp'
import IMG2 from '../../assets/blog2.webp'
import IMG3 from '../../assets/blog3.webp'
import { ImTextColor } from 'react-icons/im'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'H7CTF - WEB CHALLENGES WRITEUP',
        link: 'https://medium.com/@josangeorge27/h7ctf-web-challenges-db1883775dfd',
    },
    {
        id: 2,
        image: IMG2,
        title: 'Unveiling the Power of AI in Cybersecurity: Building a Spam Detector',
        link: 'https://medium.com/@josangeorge27/unveiling-the-power-of-ai-in-cybersecurity-building-a-spam-detector-cc6074b9c20c',
    },
    {
        id: 3,
        image: IMG3,
        title: 'GlacierCTF 2024: Solving the “FindMe” Challenge (Miscellaneous)',
        link: 'https://medium.com/@josangeorge27/glacierctf-2024-solving-the-findme-challenge-miscellaneous-cca55608caf4',
    },
]


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h2><b>Recent Blogs</b></h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, link }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={link} className='summa' target='_blank' style={{color:'white'}}>Medium</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio