import React from "react";
import { Container, Grid } from "@material-ui/core";
import welcome1 from "../asset/images/welcome_1.jpg";
import welcome2 from "../asset/images/welcome_2.jpg";
import Testmonial from "../component/Testmonial/Testmonial";
import PageStrip from "../component/PageStrip/PageStrip"

const About = () => {
    return (
        <React.Fragment>
                    <PageStrip
                        imgSrc="https://expert-themes.com/html/shangrila/images/background/4.jpg"
                        pageTitle ="About Us"
                    />

                    <section className="about_page">
                                <Container maxWidth="lg">
                                            <Grid container>
                                                <Grid item md="6">
                                                            <div className="about_page_h3">Welcome to</div>
                                                            <div className="about_page_h2">Shangrila Restaurant</div>
                                                            <p className="about_page_txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>

                                                </Grid>
                                                <Grid item md="6">
                                                            <div className="about_right_sec">
                                                                            <div className="about_upper_imgsec">
                                                                                        <img src={welcome1} alt="" className="about_upper_img" />
                                                                            </div>
                                                                            <div className="about_bottom_imgsec">
                                                                                        <img src={welcome2} alt="" className="about_bottom_img" />
                                                                            </div>
                                                            </div>
                                                </Grid>
                                            </Grid>
                                </Container>
                    </section>

                    <Testmonial/>
        </React.Fragment>
    )
}

export default About;