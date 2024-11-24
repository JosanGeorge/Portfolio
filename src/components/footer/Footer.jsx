import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithubAlt } from 'react-icons/fa'
import { AiOutlineYoutube } from 'react-icons/ai'
import { AiOutlineSkype } from 'react-icons/ai'
import { RiDiscordLine } from 'react-icons/ri'
import { ImBlogger2 } from 'react-icons/im'
import { FaGithub } from 'react-icons/fa';
import { FaMediumM } from 'react-icons/fa';
import { SiHackthebox } from 'react-icons/si'; // Hack The Box icon
import { SiTryhackme } from 'react-icons/si'; 


const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Josan George</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Skills</a></li>
                <li><a href="#portfolio">Blogs</a></li>

                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.youtube.com/@Wh4tTh3H4ck"><AiOutlineYoutube /></a >
                <a href="https://www.linkedin.com/in/josan-george-a86370227/"><FaLinkedinIn /></a>
                <a href="https://discord.gg/6p3ZmHHZm9"><RiDiscordLine /></a >
                <a href="https://github.com/JosanGeorge/"><FaGithub /></a >
                <a href="https://medium.com/@josangeorge27"><FaMediumM /></a >
                <a href="https://app.hackthebox.com/profile/798539" target="_blank"><SiHackthebox /></a>
                <a href="https://tryhackme.com/r/p/MRxROBOT" target="_blank"><SiTryhackme /></a>
            </div >

            <div className="footer__copyright">
                <small>&copy; <b><a href="https://www.linkedin.com/in/josan-george-a86370227/">Josan</a></b>. All rights reserved.</small>
            </div>
        </footer >
    )
}

export default Footer