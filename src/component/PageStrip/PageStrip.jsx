import React from "react";

const PageStrip = (props) => {
            return(
                    <React.Fragment>
                                        <section className="pageStrip">
                                                    <img src={props.imgSrc} alt="" className="pageStripImg" />
                                                    <div className="pageContainer">
                                                                          <div className="pageTitle">{props.pageTitle}</div>              
                                                    </div>
                                        </section>
                    </React.Fragment>
            )
            
}

export default PageStrip;