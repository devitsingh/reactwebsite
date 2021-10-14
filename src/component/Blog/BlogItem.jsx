import React from "react";

const BlogItem = (props) => {
    const truncate = (text, textlen) => {
            return text.length > textlen ? text.substr(text, textlen - 1) + "...." : text;
    }
    let para = props.Blogpara;
    let blogtxt =  truncate(para, 200);
        return(
                <React.Fragment>
                <div className="BlogItem">
                <img src={props.srcImg} className="BlogItem_img" alt="" />
                <div className="BlogDetailSec">
                    <h3 className="BlogHeading">{props.blogHeading}</h3>
                    <div class="BlogUser">
                        <span className="BlogDate">{props.CreateData}</span>
                        <span className="BlogUser"> {props.CreaterName}</span>
                    </div>
                    <p className="BlogTxt">{blogtxt}</p>
                    <div className="BlogLinkSec">
                        <a href={props.link} className="BlogLink">Read More</a>
                    </div>
                </div>
            </div>
                </React.Fragment>
        )
}

export default BlogItem;