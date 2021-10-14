import React from 'react';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/container';
import GalleryAll from '../component/Gallery/GalleryAll';
import PageStrip from '../component/PageStrip/PageStrip'
const Gallery = () => {
        return(
                <React.Fragment>
                                <PageStrip
                                        imgSrc="https://expert-themes.com/html/shangrila/images/background/4.jpg"
                                        pageTitle ="Our Gallery"
                                />
                                <section className="gallery_page">
                                        <div className="galleryImgSec">
                                                <Container maxWidth="lg">
                                                        <Grid container className="galleryImgContainer">
                                                                <GalleryAll />
                                                        </Grid>
                                                </Container>
                                        </div>
                                </section>
                </React.Fragment>
                
        )
}

export default Gallery;