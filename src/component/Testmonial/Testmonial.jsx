import React from 'react';
import { Container } from '@material-ui/core';
import TestmonialItem from './TestmonialItem';
const Testmonial = () => {
            return(
                    <React.Fragment>
                                <section className="testmonialSec">
                                        <Container>
                                                        <div class="testmonail-inner">
                                                                                    <TestmonialItem />
                                                        </div>      
                                        </Container>
                                </section>
                    </React.Fragment>
            )
}

export default Testmonial;