import React from 'react'
import './experience.css'
import { BsAlignCenter, BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
            <h2><strong>My Experience</strong></h2>

            <div className="container experience__container">
            <div className="experience__frontend">
                    <h3><b>CyberSapiens, Cybersecurity Intern</b></h3>
                      <h3 className='exp_sub'>Sep 2024 - Present</h3>  
                    <div className="experience__content">
                    <h4> ➤ &nbsp;&nbsp; Live VAPT Projects: Successfully contributed to live Vulnerability Assessment and Penetration Testing (VAPT) projects, identifying and documenting critical security vulnerabilities and delivering professional reports with actionable remediation recommendations.</h4>
                    <h4> ➤ &nbsp;&nbsp; Task Management: Reported daily, weekly, and monthly tasks, demonstrating consistent engagement, effective time management, and adaptability in handling complex challenges.</h4>
                    </div>
                </div>

                <div className="experience__frontend">
                    <h3><b>Rootecstak, Volunteer</b> </h3>
                    <h3 className='exp_sub'>Jan 2024 – Present</h3>
                    <div className="experience__content">
                        <h4> ➤ &nbsp;&nbsp;    Assisted in organizing and conducting information security meetups.</h4>
                        <h4> ➤ &nbsp;&nbsp;   Mentored college students, providing guidance on internships and cybersecurity skills development. </h4>
                        <h4> ➤ &nbsp;&nbsp;   Connected with industry professionals to gain valuable insights into the field. </h4>
                        
                        {/* <h4>➤ &nbsp;&nbsp;     Assisted in organizing and conducting information security meetups.</h4> */}
                        </div>
                </div>
                {/* End of front end */}

                <div className="experience__backend">
                    <h3><b>CTF Player</b></h3>
                    <h3 className='exp_sub'>Jan 2023 – Present</h3>
                    <div className="experience__content">
                    <h4>➤ &nbsp;&nbsp;     Won in many CTFs representing Null Ninjas, like AnzenCTF, ShellLock-CTF, Nakshatra 2023 CTF, etc.</h4>
                    <h4>➤ &nbsp;&nbsp;     Secured 13th position in Yukthi CTF conducted in association with Tamilnadu Cybercrime Department.</h4>
                    <h4>➤ &nbsp;&nbsp;     Finalist in TNSkills - cybersecurity further to represent Indiaskills.</h4>
                    <h4>➤ &nbsp;&nbsp;     Top 10 in various international CTFs.</h4>
                    <h4>➤ &nbsp;&nbsp;     Joined TamilCTF team and participated in various CTFs by learning from experienced professionals.</h4>
                    </div>
                </div>
                
                <div className="penetration_testing">
                    <h3><b>HackersForYou, Pentester Intern</b></h3>
                    <h3 className='exp_sub'>May 2024 – Aug 2024</h3>
                    <div className="experience__content">
                    <h4>➤ &nbsp;&nbsp;     Conducted 3 Vulnerability Assessment and Penetration Testing (VAPT) projects, delivering comprehensive reports with actionable recommendations.</h4>
                    <h4>➤ &nbsp;&nbsp;     Worked collaboratively in a team to address real-world cybersecurity challenges, identifying and mitigating security vulnerabilities.</h4>
                    <h4>➤ &nbsp;&nbsp;     Enhanced skills in documentation, analysis, and communication to present findings effectively.</h4>
                    <h4>➤ &nbsp;&nbsp;     Contributed to weekly tasks, consistently meeting deadlines and quality expectations.</h4>
                    </div>
                </div>

                <div className="penetration_testing">
                    <h3><b>HACKTIFY,  Penetration Testing Internship </b></h3>
                    <h3 className='exp_sub'>Feb 2024 – Mar 2024</h3>
                    <div className="experience__content">
                    <h4>➤ &nbsp;&nbsp;     Focused on identifying and exploiting vulnerabilities, including HTML Injection, Clickjacking, XSS, IDOR, CSRF, and SSRF.</h4>
                    <h4>➤ &nbsp;&nbsp;     Solved CTF challenges to enhance technical expertise and practical problem-solving skills.</h4>
                    <h4>➤ &nbsp;&nbsp;     Gained hands-on experience under the mentorship of Dr. Rohit Gautam, collaborating with a diverse, global team.</h4>
                   
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Experience