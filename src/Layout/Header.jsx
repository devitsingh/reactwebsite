import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid';
import {NavLink, Link} from 'react-router-dom'
import logo from '../asset/images/logo.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import CallIcon from '@material-ui/icons/Call';


const Header = () => {
        return(
                <React.Fragment>
                            <AppBar className="HeaderSec">
                                    <Toolbar>
                                                <Grid container spaceing={2} className="menuCenter">
                                                        <Grid item xs={4}>
                                                                <Link to="/" className="brandLogo">
                                                                        <img src={logo} alt="logo" className="logoImg" />
                                                                </Link>
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                                        <div className="menuRightSec">
                                                                                    <div className="menuList">
                                                                                                <NavLink exact to="/" className="menuItem" activeClassName="active_menu">Home</NavLink>
                                                                                                <NavLink exact to="/about" className="menuItem" activeClassName="active_menu">About</NavLink>
                                                                                                <NavLink exact to="/menu" className="menuItem" activeClassName="active_menu">Menu</NavLink>
                                                                                                <NavLink exact to="/gallery" className="menuItem" activeClassName="active_menu">Gallery</NavLink>
                                                                                                <NavLink exact to="/blog" className="menuItem" activeClassName="active_menu">Blog</NavLink>
                                                                                                <NavLink exact to="/contact" className="menuItem" activeClassName="active_menu">Contect</NavLink>
                                                                                    </div>
                                                                                    <div className="socialMedia">
                                                                                                    <a href="#0" className="socialLink">
                                                                                                            <FacebookIcon></FacebookIcon>
                                                                                                    </a>
                                                                                                    <a href="#0" className="socialLink">
                                                                                                            <TwitterIcon></TwitterIcon>
                                                                                                    </a>
                                                                                                    <a href="#0" className="socialLink">
                                                                                                            <InstagramIcon></InstagramIcon>
                                                                                                    </a>
                                                                                    </div>
                                                                                    <div className="callSec">
                                                                                                <a href="tel:7374813995" className="callLink">
                                                                                                                <CallIcon />
                                                                                                                <span>+91 7374813995</span>
                                                                                                </a>
                                                                                    </div>
                                                                        </div>  
                                                        </Grid>
                                                </Grid>       
                                    </Toolbar>
                            </AppBar>
                </React.Fragment>
        )
}

export default Header;