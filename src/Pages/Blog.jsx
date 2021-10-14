import React from "react";
import PageStrip from '../component/PageStrip/PageStrip'
import BlogAll from "../component/Blog/AllBlog";
const Blog = () => {
    return (
        <React.Fragment>
                        <PageStrip
                                imgSrc="https://expert-themes.com/html/shangrila/images/background/4.jpg"
                                pageTitle ="Our Blog"
                        />
                        
                       <BlogAll /> 
        </React.Fragment>
    )
}

export default Blog;