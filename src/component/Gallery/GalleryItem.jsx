import React, { useCallback, useState } from "react";
import Grid from '@material-ui/core/Grid';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import photos from "./GalleryImg";

const GalleryItem = () => {
        const [cureentImage, setCureentImage] = useState(0);
        const [viewerIsOpen, setViewerOpen] = useState(false);
        const openLightbox = useCallback((event, {photo, index}) => {
            setCureentImage(index);
            setViewerOpen(true);
        }, [])
        const closeLightBox = () => {
            setCureentImage(0);
            setViewerOpen(false);
        }
        
        let newPhoto = photos.slice(Math.max(photos.length -6, 1));
        

        return(
            <React.Fragment>
                        <Grid item lg={12}>
                                   <Gallery photos={newPhoto} onClick={openLightbox} renderItem="5" />   
                                    <ModalGateway>
                                        {viewerIsOpen ?(
                                                <Modal onClose={closeLightBox}>
                                                        <Carousel
                                                            cureentIndex = {cureentImage}
                                                            views = {
                                                                newPhoto.map(x => ({
                                                                    ...x,
                                                                    srcset : x.src
                                                                }))
                                                            }
                                                        />
                                                </Modal>
                                        ):null}
                                    </ModalGateway>
                        </Grid>
                        
            </React.Fragment>
        )
}

export default GalleryItem;