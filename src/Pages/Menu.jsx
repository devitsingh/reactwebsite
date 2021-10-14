import React from "react";
import { Container, Grid } from "@material-ui/core";
import PageStrip from '../component/PageStrip/PageStrip'
import MenuAll from "../component/Menu/MenuAll";

const Menu = () => {
        
            return (
                   
                    <React.Fragment>
                                        <PageStrip
                                                imgSrc="https://expert-themes.com/html/shangrila/images/background/4.jpg"
                                                pageTitle ="Our Menu"
                                        />

                                        <section className="MenuPage">
                                                        <Container maxWidth="lg">
                                                                <Grid container>
                                                                       <MenuAll />
                                                                </Grid>
                                                        </Container>
                                        </section>
                    </React.Fragment>
            )
}

export default Menu;