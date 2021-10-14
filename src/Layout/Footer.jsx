import React from "react";
import Grid from '@material-ui/core/Grid';
import logo from '../asset/images/logo.png'


const Footer = () => {
        return (
                <>
                        <footer className="footerSec">
                                                <Grid container spaceing={3}>
                                                                <Grid item lg={3}>
                                                                                <div className="aboutSec">
                                                                                                        <div className="footerLogoSec">
                                                                                                                        <a href="/" className="footerLogoLink">
                                                                                                                                <img src={logo} alt="footer logo" className="footerLogo" />
                                                                                                                        </a>
                                                                                                        </div>       
                                                                                                        <p className="footerAboutTxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                                                </div>
                                                                </Grid>
                                                                <Grid item lg={3}>
                                                                                <div className="footerLinkSec">
                                                                                                <div className="footerHeadSec">
                                                                                                                <div className="footerHeading">Our Links</div>             
                                                                                                </div>
                                                                                                <div className="footerLinkOuter">
                                                                                                                        <a href="/about" className="footerLink">About Us</a>
                                                                                                                        <a href="/gallery" className="footerLink">Gallery</a>
                                                                                                                        <a href="/menu" className="footerLink">Our Menu</a>
                                                                                                                        <a href="/blog" className="footerLink">Blog</a>
                                                                                                                        <a href="/contact" className="footerLink">Contact Us</a>
                                                                                                </div>

                                                                                </div>
                                                                </Grid>
                                                                <Grid item lg={3}>
                                                                                <div className="footerLinkSec">
                                                                                                <div className="footerHeadSec">
                                                                                                                <div className="footerHeading">Get In Touch
                                                                                                                </div>             
                                                                                                </div>
                                                                                                <div className="footerLinkOuter">
                                                                                                                        <div className="footerAddressItem">
                                                                                                                                        <p className="footerAddress">Email:</p>
                                                                                                                                        <a href="mailto:devitsingh136@gmail.com" className="footerLink footerAddLink">Devitsingh136@gmail.com</a>
                                                                                                                        </div>
                                                                                                                        <div className="footerAddressItem">
                                                                                                                                        <p className="footerAddress">Phone:</p>
                                                                                                                                        <a href="tel:7374813995" className="footerLink footerAddLink">7374813995</a>
                                                                                                                        </div>
                                                                                                                        <div className="footerAddressItem">
                                                                                                                                        <p className="footerAddress">Address:</p>
                                                                                                                                        <div className="footerLink footerAddLink">203, Envato Labs, Behind Alis Str,
                                                                                                                                        Melbourne, Australia.</div>
                                                                                                                        </div>
                                                                                                                        
                                                                                                                       
                                                                                                </div>

                                                                                </div>   
                                                                </Grid>
                                                                <Grid item lg={3}>
                                                                                <div className="footerLinkSec">
                                                                                                <div className="footerHeadSec">
                                                                                                                <div className="footerHeading">We Are Social</div>             
                                                                                                </div>
                                                                                                <div className="footerLinkOuter">
                                                                                                                        <a href="/about" className="footerLink">Facebook</a>
                                                                                                                        <a href="/gallery" className="footerLink"> Twitter</a>
                                                                                                                        <a href="/menu" className="footerLink"> Linkedin</a>
                                                                                                                      
                                                                                                </div>

                                                                                </div>
                                                                </Grid>
                                                </Grid>
                        </footer>
                </>
        )
}

export default Footer;