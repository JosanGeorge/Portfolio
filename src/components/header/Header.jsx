import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/file.png'
import HeaderSocials from './HeaderSocials'

const header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5> Hello I'm</h5>
                <h1>Josan George</h1>
                <h5 className="text-light">Penetration Tester & Cybersecurity Enthusiast</h5>
                <CTA />
                <HeaderSocials />

                {/* <img src={ME} alt="me" height="1000" width="500" /> */}
                <div className="me">
                    <img src={ME} alt="me" height="500" width="1000" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default header