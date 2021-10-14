import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Menucard from './MenuHomeCard';
const Menu = () => {
        
        
        return (
                <React.Fragment>
                              <Container maxWidth="lg">
                                        <Grid container>
                                                    <Menucard />   
                                        </Grid>  
                                        <div className="MenuLinkSec">
                                                <a href="/menu" className="primaryBtn">Load More</a>
                                        </div>
                              </Container>         
                </React.Fragment>
        )
       
}

export default Menu;