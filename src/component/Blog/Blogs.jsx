import React from "react";
import { Container } from "@material-ui/core";
import BlogItem from "./BlogItem"
import BlogData from "./BlogData";

const Blogs = () => {
        return(
                <React.Fragment>
                                    <section className="blogSec">
                                                    <Container>
                                                                    <div className="BlogWrapper">
                                                                                {
                                                                                        BlogData.slice(Math.max(BlogData.length - 3, 1)).map((item, index) => {
                                                                                                return(
                                                                                                        <BlogItem key = {index}
                                                                                                                srcImg = {item.imgSrc}
                                                                                                                blogHeading = {item.blogHeading}
                                                                                                                Blogpara = {item.Blogpara}
                                                                                                                CreateData = {item.CreateData}
                                                                                                                CreaterName = {item.CreaterName}
                                                                                                                link={`/blogdetail/${item.id}`}
                                                                                                        />
                                                                                                )
                                                                                        })
                                                                                }
                                                                                
                                                                    </div>     
                                                    </Container>
                                    </section> 
                
                        
                </React.Fragment>
        )
}

export default Blogs;