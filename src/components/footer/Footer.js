import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
import footerLogo from "../../assets/orangeflix.png"

const Footer = () => {
  return (
        <section>
                <footer>

                    <div className='footerContainer'>
                    
                        <div className='footerItemContainer'>
                            <ul>
                                <li><Link to="" className='footerLinks'>FAQ</Link></li>
                                <li><Link to="" className='footerLinks'>Investor Relation</Link></li>
                                <li><Link to="" className='footerLinks'>Ways to Watch</Link></li>
                                <li><Link to="" className='footerLinks'>Corperate Information</Link></li>
                                <li><Link to="" className='footerLinks'>Orangflix Originals</Link></li>
                            </ul>
                        </div>

                        <div className='footerItemContainer'>
                            <ul>
                                <li><Link to="" className='footerLinks'>Help Center</Link></li>
                                <li><Link to="" className='footerLinks'>Jobs</Link></li>
                                <li><Link to="" className='footerLinks'>Ways to Watch</Link></li>
                                <li><Link to="" className='footerLinks'>Terms of Use</Link></li>
                                <li><Link to="" className='footerLinks'>Contact Us</Link></li>
                            </ul>
                        </div>

                        <div className='footerItemContainer'>
                            <ul>
                                <li><Link to="" className='footerLinks'>Account</Link></li>
                                <li><Link to="" className='footerLinks'>Redeem Gift Cards</Link></li>
                                <li><Link to="" className='footerLinks'>Ways to Watch</Link></li>
                                <li><Link to="" className='footerLinks'>Privacy</Link></li>
                                <li><Link to="" className='footerLinks'>Speed Test</Link></li>
                            </ul>
                        </div>

                        <div className='footerItemContainer'>
                            <ul>
                                <li><Link to="" className='footerLinks'>Media Center</Link></li>
                                <li><Link to="" className='footerLinks'>Buy Gift Cards</Link></li>
                                <li><Link to="" className='footerLinks'>Cookie Preferences</Link></li>
                                <li><Link to="" className='footerLinks'>Privacy</Link></li>
                                <li><Link to="" className='footerLinks'>Legal Notice</Link></li>
                            </ul>
                        </div>
                       
                    </div>

                    <div className='footerLogoContainer'>
                        <img src={footerLogo} alt='' className='footerlogo'/>
                    </div>
                </footer>
        </section>
  )
}

export default Footer