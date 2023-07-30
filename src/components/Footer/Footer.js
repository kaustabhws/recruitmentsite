import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div className="footer">
            <div className="contain">
                <div className="col">
                    <h1>Job Junction</h1>
                    <ul>
                        <li>About</li>
                        <li>Mission</li>
                        <li>Services</li>
                        <li>Social</li>
                        <li>Get in touch</li>
                    </ul>
                </div>
                <div className="col">
                    <h1>Candidates</h1>
                    <ul>
                        <li>For Candidates</li>
                        <li>Candidate Sign Up</li>
                        <li>Refer and Earn</li>
                        <li>Candidate FAQ</li>
                        <li>Candidate Support</li>
                    </ul>
                </div>
                <div className="col">
                    <h1>Employees</h1>
                    <ul>
                        <li>For Employees</li>
                        <li>Employee Sign Up</li>
                        <li>Refer and Earn</li>
                        <li>Employee FAQ</li>
                        <li>Employee Support</li>
                    </ul>
                </div>
                <div className="col">
                    <h1>Support</h1>
                    <ul>
                        <li>Contact us</li>
                        <li>Web chat</li>
                        <li>Open ticket</li>
                    </ul>
                </div>
                <div className="col social">
                    <h1>Social</h1>
                    <ul>
                        <li>
                            <img
                                src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png"
                                width={32}
                                style={{ width: 32 }}
                            />
                        </li>
                        <li>
                            <img
                                src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-512.png"
                                width={32}
                                style={{ width: 32 }}
                            />
                        </li>
                        <li>
                            <img
                                src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-512.png"
                                width={32}
                                style={{ width: 32 }}
                            />
                        </li>
                    </ul>
                </div>
                <div className="clearfix" />
            </div>
        </div>

    )
}
