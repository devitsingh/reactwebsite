import React from "react";
import Grid from '@material-ui/core/Grid';
import ReadMoreReact from 'read-more-react';
import MenuList from './MenuList';

const Menucard = () => {
                return (
                        <React.Fragment>
                                {
                                        MenuList.slice(0, 6).map((Menu, index) => {
                                                            return (
                                                                <React.Fragment key={index}>
                                                                <Grid item md={6}>
                                                                        <div className="MenuItem">
                                                                                <div className="MenuLeft">
                                                                                        <img src={Menu.Menu_Img} className="MenuIMg" alt="menu img" />
                                                                                </div>
                                                                                <div className="MenuRight">
                                                                                        <div className="MenuHeading">{Menu.Menu_Name}</div>
                                                                                        <div className="MenuPrice">₹{Menu.Menu_Price} <span>{Menu.Menu_Dis}% OFF</span></div>
                                                                                        <div className="menuTxt">
                                                                                                <ReadMoreReact
                                                                                                        text={Menu.Menu_Txt}
                                                                                                        min={10}
                                                                                                        ideal={60}
                                                                                                        max={100}
                                                                                                        readMoreText="read more"
                                                                                                >
                                                                                                </ReadMoreReact>
                                                                                        </div>

                                                                                </div>
                                                                        </div>
                                                                </Grid>
                                                            </React.Fragment> 
                                                            )
                                                            
                                                    
                                            
                                    })
                                }
                        </React.Fragment>
                )
}

export default Menucard;