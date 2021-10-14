import React from "react";
import ErrorBg from "../asset/images/errorBg.jpg";
const Error = () => {
        return(
                <React.Fragment>
                                                <section className="errorSec">
                                                                        <div className="errorBg_Sec">
                                                                               <img src={ErrorBg} className="errorBg" alt="" />         
                                                                        </div>
                                                                        <div className="errorDetailsec">
                                                                                                <div className="error_name">404</div>
                                                                                                <div class="error_bottom_detail">
                                                                                                                <p className="error_bottom_txt">Oops! That page can’t be found</p>
                                                                                                                <div className="error_bottom_title">Sorry, but the page you are looking for does not existing
                                                                                                                </div>
                                                                                                </div>
                                                                                                <a href="/" className="primaryBtn">Go to home page</a>
                                                                        </div>
                                                </section> 
                </React.Fragment>
        )
}
export default Error;