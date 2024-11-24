import React from 'react'
import './about.css'
import ME from '../../assets/profile1.jpg'
import { FaAward } from 'react-icons/fa'
import { TbCertificate } from 'react-icons/tb'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h2><b>Whoami</b></h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Me Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <a href='https://certified.tcm-sec.com/50bcbe1b-651e-4b67-a003-cbc1b87b3e47'>
                        <article className='about__card'>
                            <TbCertificate className='about__icon' />
                            <h5>PNPT</h5>
                            <small>TCM Security</small>
                        </article>
                        </a>

                        <a href='https://www.credential.net/01260b6c-1ad3-4320-b4b1-0b150dd00dde#gs.hy27xo'>
                        <article className='about__card'>
                            {/* <FaAward className='about__icon' /> */}
                            <TbCertificate className='about__icon' />
                            <h5>CRTP</h5>
                            <small>Altered Security</small>
                        </article>
                        </a>

                        

                        {/* <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>+4 Completed</small>
                        </article> */}
                    </div>

                    <p>
                    I am a passionate cybersecurity enthusiast actively engaged in platforms like TryHackMe, HackTheBox, and PortSwigger Web Academy, where I am ranked in the top 1% on TryHackMe and have completed all practitioner labs on PortSwigger. As the leader of the CTF team "NULL NINJAS" and an active member of "TamilCTF," I collaborate with skilled professionals to tackle challenges and gain valuable experience. Certified as a TCM Security - Practical Network Penetration Tester (PNPT) and Altered Security - Certified Red Team Professional (CRTP), I continuously refine my skills and am currently preparing for the HackTheBox Certified Penetration Testing Specialist (CPTS) to advance my expertise further.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About