import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import TestmonialArr from "./TestmonialArray";

const TestmonialItem = () => {
            return(
                    <React.Fragment>
                    <Carousel
                    showArrows={false}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={6100}
                    className="testmonialSecWrapper">
                        

                        {
                            TestmonialArr.map((testmonial, index) => {
                                    return(
                                        <div class="testmonailItem" key={index}>
                                                <div className="testmonailImgSec">
                                                    <img src={testmonial.imgSec} alt="testmonial img" className="testmonailImg" />
                                                </div>
                                                <p className="testmonailTxt">{testmonial.title}</p>
                                                <div className="testmonailUser">{testmonial.reviewUser}</div>
                                        </div>
                                    )
                            })
                        }

                    </Carousel>
                                    
                    </React.Fragment>
            )
}

export default TestmonialItem;