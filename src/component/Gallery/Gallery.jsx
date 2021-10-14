import React from "react";
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/container';
import GalleryItem from "./GalleryItem";
const Gallery = () => {
        return(
                <React.Fragment>
                                <div className="galleryImgSec">
                                        <Container maxWidth="lg">
                                            <Grid container className="galleryImgContainer">
                                                            <GalleryItem />
                                            </Grid>
                                            <div className="MenuLinkSec">
                                                <a href="/gallery" className="primaryBtn">Load More</a>
                                            </div>
                                        </Container>
                                </div>
                </React.Fragment>
            )    

}

export default Gallery;  