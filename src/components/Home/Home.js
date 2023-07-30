import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
    return (
        <>
            <div className="homeWrapper">
                <div className="contentW">
                    <h4>THE CLIENT PORTAL FOR STARTUPS</h4>
                    <h1>Find your next top tech <br /> job in 1 week</h1>
                </div>
            </div>
            <div className="heroWrapper">
                <div className="heroFeatures">
                    <img src="https://global-uploads.webflow.com/605ad29901132bc543e01d9b/64590dc8b87af8701c873aba_CheckCircle.svg" loading="lazy" alt="" class="checkbox-icon big" />
                    <font className='heroText'>50% faster client response</font>
                </div>
                <div className="heroFeatures">
                    <img src="https://global-uploads.webflow.com/605ad29901132bc543e01d9b/64590dc8b87af8701c873aba_CheckCircle.svg" loading="lazy" alt="" class="checkbox-icon big" />
                    <font className='heroText'>Improve fill ratios</font>
                </div>
                <div className="heroFeatures">
                    <img src="https://global-uploads.webflow.com/605ad29901132bc543e01d9b/64590dc8b87af8701c873aba_CheckCircle.svg" loading="lazy" alt="" class="checkbox-icon big" />
                    <font className='heroText'>Reduce time to submit</font>
                </div>
            </div>
            <div className="heroWelcome">
                <h2>Are You Ready for the Next Level of Hiring Success?
                    <br />Let leading Indian technology companies compete to hire you.</h2>
            </div>
            <div className="btnContainer">
                <Link to="/signup"><button className='signBtn'>
                    Join Now
                    <div class="arrow-wrapper">
                        <div class="arrow"></div>
                    </div>
                </button> </Link>
            </div>
            <div class="stepWrapper">
                <div class="cols">
                    <div class="imageWrapper">
                        <img src='https://d383au3bye3rv1.cloudfront.net/static/images/optimized/feature_icon_2.png' />
                    </div>
                    <h4>Step 1: Complete Profile</h4>
                    <p class="stepGui">Register on Job Junction and set up your company profile.</p>
                </div>
                <div class="cols">
                    <div class="imageWrapper">
                        <img src='https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon1.png' />
                    </div>
                    <h4>Step 2: Post Job Listings</h4>
                    <p class="stepGui">Add your job openings with detailed descriptions.</p>
                </div>
                <div class="cols">
                    <div class="imageWrapper">
                        <img src='https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon2.png' />
                    </div>
                    <h4>Step 3: Review and Connect</h4>
                    <p class="stepGui">Review applicants and connect with potential hires.</p>
                </div>
            </div>
            <div className="company">
                <h2>Loved by leading staffing teams around the world</h2>
                <img src='https://d383au3bye3rv1.cloudfront.net/static/dist/Company%20Long%20List-63Z2IARV.png' />
            </div>
        </>
    )
}
