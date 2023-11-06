import React from 'react';
import styles from './ResumeProject.module.css';

const ResumeProject = () => {
    return (
        <div className={styles["main-container"]}>
            <aside className={styles.sidebar}>
                <img className={styles["my-photo"]} src="/photo1.jpg" alt="" />
                    <div className={styles["contacts-container"]}>
                        <h3 className={styles["sidebar-titles"]}>Contacts</h3>
                         <div>
                             <span className={styles["contacts-link-type"]}>C:</span> <a className={styles["contacts-link"]} href="tel: +38 63 624 36 49">+38 063 624 36 49</a>
                         </div>
                         <div>
                             <span className={styles["contacts-link-type"]}>E:</span> <a className={styles["contacts-link"]} href="mailto:mikhailenkomikhail1995@gmail.com">mikhailenkomikhail1995@gmail.com</a>
                         </div>
                    </div>
                    <div className={styles["tech-skills-container"]}>
                        <h3 className={styles["sidebar-titles"]}>Tech Skills</h3>
                        <ul>    
                            <li className={styles["sidebars-item"]}><span className={styles["sidebars-text"]}>GIT</span></li>
                            <li className={styles["sidebars-item"]}><span className={styles["sidebars-text"]}>HTML5</span></li>
                            <li className={styles["sidebars-item"]}><span className={styles["sidebars-text"]}>CSS3</span></li>
                            <li className={styles["sidebars-item"]}><span className={styles["sidebars-text"]}>JavaScript</span></li>
                            <li className={styles["sidebars-item"]}><span className={styles["sidebars-text"]}>React.js</span></li>
                            <li className={styles["sidebars-item"]}><span className={styles["sidebars-text"]}>Node.js</span></li>
                        </ul>
                    </div>
                    <div className={styles["soft-skills-container"]}>
                        <h3 className={styles["sidebar-titles"]}>Soft Skills</h3>
                        <ul>
                            <li className={styles["sidebars-item"]}><span className={styles["sidebars-text"]}>Сommunication</span></li>
                            <li className={styles["sidebars-item"]}><span className={styles["sidebars-text"]}>Flexibility and Creativity</span></li>
                            <li className={styles["sidebars-item"]}><span className={styles["sidebars-text"]}>Time Management</span></li>
                            <li className={styles["sidebars-item"]}><span className={styles["sidebars-text"]}>Teamwork</span></li>
                            <li className={styles["sidebars-item"]}><span className={styles["sidebars-text"]}>Presentation Skills</span></li>
                            <li className={styles["sidebars-item"]}><span className={styles["sidebars-text"]}>Negotiation Skills</span></li>
                        </ul>
                    </div>
            </aside>
            <div className={styles["about-me-container"]}>
                 <div className={styles.header}>
                    <h2 className={styles["header-subtitle"]}>Junior Front-End Developer</h2>
                    <h1 className={styles["header-title"]}>Mykhailenko Mykhail</h1>
                    <div className={["header-text"]}>
                        <p className={styles["header-text-p"]}> 21.08.1995 (28 years)</p>
                        <p className={styles["header-text-p"]}>Kyiv, Ukraine</p>
                        <p className={styles["header-text-p"]}>Employment : full</p>
                        <p className={styles["header-text-p"]}>Ready to travel : yes</p>
                        <p className={styles["header-text-p"]}>English level : intermediate</p>
                        <p className={styles["header-text-p"]}>Target : to get an interesting job with good pay and career prospects in IT.</p>
                    </div>
                 </div>
                <div className={styles["work-experience"]}>
                    <h3 className={styles["about-me-title"]}>Work Experience</h3>

                    <div>
                        <h4 className={styles["work-type"]}>Front-End Developer <span className={styles["wokr-position"]}>Training center FRESHCODE (IT Courses)</span></h4>
                        <span className={styles["work-time"]}><span className={styles["work_text"]}>January 2023 - up to now</span> | <span className={styles["work_text"]}>Ukraine</span></span>
                    </div>
                    <ul className={styles["work-skills"]}>
                        <li>Learn and practice HTML5 and CSS3.</li>
                        <li>Learn and practice JavaScript.</li>
                        <li>Learn and practice Node.js.</li>
                        <li>Learn and practice React.js.</li>
                    </ul>

                    <div>
                        <h4 className={styles["work-type"]}>Trader (cryptocurrency trading) <span className={styles["wokr-position"]}>Self-employment</span></h4>
                        <span className={styles["work-time"]}><span className={styles["work_text"]}>March 2022 - December 2022</span> | <span className={styles["work_text"]}>Ukraine</span></span>
                    </div>
     
                    <ul className={styles["work-skills"]}>
                        <li>Analyze markets and various cryptocurrency exchanges to identify potential trading opportunities.</li>
                        <li>Develop and implement effective trading strategies.</li>
                        <li>Monitor and analyze price movements and other factors affecting financial markets.</li>
                        <li>Conduct regular analysis of trading results and make adjustments to strategies.</li>
                    </ul>

                    <div>
                        <h4 className={styles["work-type"]}>Sales Manager <span className={styles["wokr-position"]}>Dnipro Steel</span></h4>
                        <span className={styles["work-time"]}><span className={styles["work_text"]}>April 2021 - February 2022</span> | <span className={styles["work_text"]}>Ukraine</span></span>
                    </div>
     
                    <ul className={styles["work-skills"]}>
                        <li>Support of regular customers and search for new customers, cold calls.</li>
                        <li>Conclusion of contracts and communication with suppliers.</li>
                        <li>Logistics and control of delivery of goods to the client.</li>
                        <li>Introduction of reporting in the CRM.</li>
                    </ul>
     
                    <div>
                        <h4 className={styles["work-type"]}>Sales Manager <span className={styles["wokr-position"]}>Stillmart</span></h4>
                        <span className={styles["work-time"]}><span className={styles["work_text"]}>July 2020 - March 2021</span> | <span className={styles["work_text"]}>Ukraine</span></span>
                    </div>
     
                    <ul className={styles["work-skills"]}>
                        <li>Support of regular customers and search for new customers, cold calls.</li>
                        <li>Conclusion of contracts and communication with suppliers.</li>
                        <li>Logistics and control of delivery of goods to the client.</li>
                        <li>Introduction of reporting in the CRM.</li>
                    </ul>
     
                    <div>
                        <h4 className={styles["work-type"]}>Logistics Manager <span className={styles["wokr-position"]}>Range-Trans</span></h4>
                        <span className={styles["work-time"]}><span className={styles["work_text"]}>July 2018 - June 2020</span> | <span className={styles["work_text"]}>Ukraine</span></span>
                    </div>
                    <ul className={styles["work-skills"]}>
                        <li>Search for trucks for cargo transportation.</li>
                        <li>Conclusion of contracts and communication with carriers.</li>
                        <li>Сontrol of delivery of goods to the client.</li>
                        <li>Preparation of documents for crossing the border.</li>
                        <li>Control of payments for cargo transportation</li>
                        <li>Informing the customer about the location of the cargo.</li>
                        <li>Introduction of reporting in the CRM.</li>
                    </ul>
     
                    <div>
                        <h4 className={styles["work-type"]}>Accоunt Manager, Sales Manager <span className={styles["wokr-position"]}>Maxi-Market</span></h4>
                        <span className={styles["work-time"]}><span className={styles["work_text"]}>May 2017 - September 2017</span> | <span className={styles["work_text"]}>Ukraine</span></span>
                    </div>
                    <ul className={styles["work-skills"]}>
                        <li>Support of regular customers and search for new customers, cold calls.</li>
                        <li>Informing the client about the company's financial services.</li>
                        <li>Helping the client in financial management.</li>
                        <li>Introduction of reporting in the CRM.</li>
                    </ul>

                    <div>
                        <h4 className={styles["work-type"]}>Economist <span className={styles["wokr-position"]}>EpicentrK</span></h4>
                        <span className={styles["work-time"]}><span className={styles["work_text"]}>May 2016 - September 2016</span> | <span className={styles["work_text"]}>Ukraine</span></span>
                    </div>
                    <ul className={styles["work-skills"]}>
                        <li>Control of goods availability.</li>
                        <li>Formation of requests for the purchase of goods.</li>
                        <li>Preparation of reports on the work of the department.</li>
                        <li>Monitoring the implementation of the sales plan of the department.</li>
                    </ul>
     
                </div> 
     
                <div>
                    <h3 className={styles["about-me-title"]}>Education</h3>
                    <h4 className={styles["university-name"]}>Kiev National University of Trade and Economics</h4>
                    <p className={styles["university-prof"]}><b>Economics and enterprise management</b></p>
                    <span className={styles["university-time"]}>Septermber 2013 - May 2018 | Ukraine</span>
                </div>
     
     
            </div> 
        </div> 
    );
}

export default ResumeProject;
