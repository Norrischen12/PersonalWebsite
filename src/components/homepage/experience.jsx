import React from "react";
import './styles/experience.css';

const Experience = () => {
    return (
        <section className="experience-section" id = "about">
            <div className="container">
                <div className="section_title center">
                    <h1>Why Choose Me</h1>
                </div>
                <div className="experience-items">
                    <div className="experience-item">
                        <div className="experience-info">
                            <div className="experience-logo-name">
                                <img className="experience-logo" src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="logo"></img>
                                <p>Python</p>
                            </div>
                            <div>
                                90%
                            </div>

                        </div>
                        <div className="progress-line" data-percent="90%">
                            <span style={{width: "90%"}}></span>
                        </div>
                    </div>

                    <div className="experience-item">
                        <div className="experience-info">
                            <div className="experience-logo-name">
                            <img className="experience-logo" alt="logo" src="https://media.istockphoto.com/id/1180882238/vector/success-logo.jpg?s=612x612&w=0&k=20&c=brO28PRCR_73Oj-qVIGDzYxfDwZj17t7VrLb-JiGH2Q="></img>
                                <p>Leadership</p>
                            </div>
                            <div>
                                85%
                            </div>

                        </div>
                        <div className="progress-line-soft" data-percent="85%">
                            <span style={{width: "85%"}}></span>
                        </div>
                    </div>


                    <div className="experience-item">
                        <div className="experience-info">
                            <div className="experience-logo-name">
                                <img className="experience-logo" alt="logo" src="https://cdn.worldvectorlogo.com/logos/react-1.svg"></img>
                                <p>Web Development (JavaScript/HTML/CSS)
                                </p>
                            </div>
                            <div>
                                90%
                            </div>

                        </div>
                        <div className="progress-line" data-percent="90%">
                            <span style={{width: "90%"}}></span>
                        </div>
                    </div>



                    <div className="experience-item">
                        <div className="experience-info">
                            <div className="experience-logo-name">
                                <img className="experience-logo" alt="logo" src="https://static.vecteezy.com/system/resources/previews/010/948/779/original/time-management-logo-template-check-mark-with-clock-icon-design-free-vector.jpg"></img>
                                <p>Time Management</p>
                            </div>
                            <div>
                                75%
                            </div>

                        </div>
                        <div className="progress-line-soft" data-percent="75%">
                            <span style={{width: "75%"}}></span>
                        </div>
                    </div>



                    <div className="experience-item">
                        <div className="experience-info">
                            <div className="experience-logo-name">
                                <img className="experience-logo" alt="logo" src="https://1000logos.net/wp-content/uploads/2020/09/Java-Emblem.jpg"></img>
                                <p>Java</p>
                            </div>
                            <div>
                                85%
                            </div>

                        </div>
                        <div className="progress-line" data-percent="85%">
                            <span style={{width: "85%"}}></span>
                        </div>
                    </div>


                    <div className="experience-item">
                        <div className="experience-info">
                            <div className="experience-logo-name">
                                <img className="experience-logo" alt="logo" src="https://t4.ftcdn.net/jpg/05/63/63/55/360_F_563635598_WBC0yMyndr4Ze9aTJDa5AYvV2fj0ZoWA.jpg"></img>
                                <p>Communication</p>
                            </div>
                            <div>
                                90%
                            </div>

                        </div>
                        <div className="progress-line-soft" data-percent="90%">
                            <span style={{width: "90%"}}></span>
                        </div>
                    </div>

                    <div className="experience-item">
                        <div className="experience-info">
                            <div className="experience-logo-name">
                                <img className="experience-logo" alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png"></img>
                                <p>C/C++</p>
                            </div>
                            <div>
                                80%
                            </div>

                        </div>
                        <div className="progress-line" data-percent="80%">
                            <span style={{width: "80%"}}></span>
                        </div>
                    </div>


                    <div className="experience-item">
                        <div className="experience-info">
                            <div className="experience-logo-name">
                                <img className="experience-logo" alt="logo" src="https://www.pharma-mkting.com/wp-content/uploads/2019/06/Collabortaionimg-smaller.jpg"></img>
                                <p>Cross-Functional Collaboration</p>
                            </div>
                            <div>
                                85%
                            </div>

                        </div>
                        <div className="progress-line-soft" data-percent="85%">
                            <span style={{width: "85%"}}></span>
                        </div>
                    </div>

                    


                    
                </div>
            </div>
        </section>
    )
}  

export default Experience;