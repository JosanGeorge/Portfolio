import React from 'react'
import './services.css'
import { BsCheckLg } from 'react-icons/bs'

const Services = () => {
    return (
        <section id='services'>
            <h2><b>Skills</b></h2>

            <div className="container services__containter">
                
                <article className="service">
                    <div className="service__head">
                        <h3><b>Penetration Testing</b></h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Web Application Penetration Testing</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Network Penetration Testing</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Wireless Penetration Testing</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Active Directory Penetration Testing</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>API Penetration Testing</p>
                        </li>
                    </ul>
                </article>
                
                <article className="service">
                    <div className="service__head">
                        <h3><b>Programming / Scripting</b></h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Python</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>SQL</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Java</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>C</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>C++</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>MERN Stack</p>
                        </li>
                    </ul>
                </article>
              
                <article className="service">
                    <div className="service__head">
                        <h3><b>Tools</b></h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Burpsuite</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Nessus</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Nikto</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Metasploit</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>WPScan</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Acunetix</p>
                        </li><li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Responder</p>
                        </li>
                    </ul>
                </article>
                

            </div>
        </section>
    )
}

export default Services