import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { ImBlogger2 } from 'react-icons/im'
import { RiDiscordLine } from 'react-icons/ri'
import { SiHackthebox } from 'react-icons/si'; // Hack The Box icon
import { SiTryhackme } from 'react-icons/si';  // TryHackMe icon
import { FaMediumM } from 'react-icons/fa';
import { AiOutlineYoutube } from 'react-icons/ai'


const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.youtube.com/@Wh4tTh3H4ck"><AiOutlineYoutube /></a >
            <a href="https://www.linkedin.com/in/josan-george-a86370227/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/JosanGeorge/" target="_blank"><FaGithub /></a>
            <a href="https://medium.com/@josangeorge27" target="_blank"><FaMediumM /></a>
            <a href="https://discord.gg/6p3ZmHHZm9" target="_blank"><RiDiscordLine /></a>
            <a href="https://app.hackthebox.com/profile/798539" target="_blank"><SiHackthebox /></a>
            <a href="https://tryhackme.com/r/p/MRxROBOT" target="_blank"><SiTryhackme /></a>
            {/* <iframe src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=729295" style='border:none;'></iframe> */}
        </div>
    )
}

export default HeaderSocials