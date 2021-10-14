import React, { useCallback, useState } from "react";
import Grid from '@material-ui/core/Grid';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import photos from "./GalleryImg";

const GalleryAll = () => {
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

        return(
            <React.Fragment>
                        <Grid item lg={12}>
                                   <Gallery photos={photos} onClick={openLightbox} renderItem="5" />   
                                    <ModalGateway>
                                        {viewerIsOpen ?(
                                                <Modal onClose={closeLightBox}>
                                                        <Carousel
                                                            cureentIndex = {cureentImage}
                                                            views = {
                                                                photos.map(x => ({
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

export default GalleryAll;