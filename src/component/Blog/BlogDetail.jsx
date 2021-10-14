import React from "react";
import BlogData from "./BlogData";
import PageStrip from '../PageStrip/PageStrip'
import { Container } from "@material-ui/core";

const BlogDetail = (props) => {
    let getId = props.match.params.id;
    let getData = BlogData[getId - 1];
     return(
                <React.Fragment>
                                        <PageStrip
                                                imgSrc="https://expert-themes.com/html/shangrila/images/background/4.jpg"
                                                pageTitle ="Blog Detail"
                                        />
                                        <div className="blogDetailsec">
                                                    <Container>
                                                                <div className="blogBackLinkSec">
                                                                            <a href="/blog" className="blogBackLink">Back To Blogs</a>
                                                                </div>
                                                                 <div className="blogContainer">
                                                                                    <img src={getData.imgSrc} className="blogDetailImg" alt="" />
                                                                                    <div className="blogDetailUser">Creative /{getData.CreateData} / By {getData.CreaterName}</div>
                                                                                    <h2 className="blogDetailHeading">{getData.blogHeading}</h2>
                                                                                    <p className="blogDetailTxt">{getData.Blogpara}</p>
                                                                 </div>
                                                    </Container>
                                        </div>              
                </React.Fragment>
     )
}

export default BlogDetail;