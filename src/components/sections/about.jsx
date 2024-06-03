import React from 'react'
import { RiArrowRightUpLine, RiDownloadLine, RiFacebookCircleFill, RiTwitterXLine, RiLinkedinFill, RiGithubLine } from '@remixicon/react'
import profile_img from "../../assets/images/about/profile.jpg"
import SlideUp from '../animations/slideUp'
const About = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row align-items-center">
                    {/*  START ABOUT IMAGE DESIGN AREA  */}
                    <div className="col-lg-5">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={profile_img} alt="About Me" />
                                <h2>Andre Anozie</h2>
                                <div className="about-btn btn-one text-center">
                                    <h6>Available for Work</h6>
                                    <div className="circle pulse color-pulse"></div>
                                </div>
                                <div className="hero-content-two">
                                    <div className="job">
                                        <span>Frontend Web Developer</span><span>UI/UX Designer</span><span>Digital Experience Partner</span>
                                    </div>
                                </div>
                                <div className="about-social text-center">
                                    <ul>
                                        {/* <li><a href=""><i><RiFacebookCircleFill size={20} /></i></a></li> */}
                                        <li><a href="https://github.com/onyianozie"><i><RiGithubLine size={20} /></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/onyi-anozie/"><i><RiLinkedinFill size={20} /></i></a></li>
                                        <li><a href="https://twitter.com/IkAnozie"><i><RiTwitterXLine size={20} /></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/*  END ABOUT IMAGE DESIGN AREA  */}
                    {/*  START ABOUT TEXT DESIGN AREA  */}
                    <div className="col-lg-7">
                        <div className="about-content-part">
                            <SlideUp>
                                <h2>
                                    Hello, I’m Andre, <span>Frontend Web Developer</span> and UI Designer Specializing in Marketing.
                                </h2>
                                <div className="hero-btns">
                                    <a href="https://drive.google.com/file/d/194fjY58pp-qmbC-3ApLyG3pr7Z5Sw-eb/view?usp=sharing" className="theme-btn">Download Resume <i><RiDownloadLine size={16} /></i></a>
                                </div>
                            </SlideUp>
                            <SlideUp>
                                <ul className="list-style-one two-column">
                                    <li><i><RiArrowRightUpLine size={18} /></i> Web Development</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> UX/UI Design</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Web Design</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Digital Marketing</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Video + Photo Production</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Project Management</li>
                                </ul>
                            </SlideUp>
                        </div>
                    </div>
                    {/*  END ABOUT TEXT DESIGN AREA  */}
                </div>
            </div>
        </section>
    )
}

export default About