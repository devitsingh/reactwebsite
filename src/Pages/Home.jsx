import React from "react";
import "../asset/css/home.scss"
import Banner from "../asset/images/image-2.jpg"
import Menu from '../component/Menu/Menu';
import Gallery from "../component/Gallery/Gallery";
import Separater from '../asset/images/separater.png';
import PageStrip from '../component/PageStrip/PageStrip'
import Testmonial from '../component/Testmonial/Testmonial'
import Blogs from '../component/Blog/Blogs'

const Home = () => {
    return (
        <React.Fragment>
                                <section className="homeBannerSec">
                                                    <img src={Banner} alt="Banner img" className="bannerImg" />
                                                    <div className="homeDetailSec">
                                                                   <div className="homeBannerH2">Welcome</div>
                                                                   <div className="homeBannerTitle"> shangrila Restaurant</div> 
                                                                   <p className="homeBannerTxt">Sed ut perspiciatis unde omnis iste natus error sit voluptatem ac cusantium doloremque laudantium.</p>
                                                                   <div className="homeBannerLinkSec">
                                                                                    <a href="/about" className="primaryBtn">Read More</a>
                                                                   </div>
                                                    </div>
                                </section>
                                <section className="MenuSec">
                                        <div className="MenuTopSec">
                                                        <div className="Heading">Our Delicious</div>
                                                        <div className="Title">Magical Experience</div>
                                                        <div className="separater">
                                                                    <img src={Separater} alt="Separater" className="separaterImg" />       
                                                        </div>
                                        </div>
                                        <Menu />
                                        
                                </section>
                                <section className="gallerySec">
                                                    <div className="HeadingTopSec">
                                                            <div className="Heading">Food Gallery</div>
                                                            <div className="Title">We Create Delicous Memory</div>
                                                            <div className="separater">
                                                                        <img src={Separater} alt="Separater" className="separaterImg" />       
                                                            </div>
                                                    </div>
                                                    <Gallery />
                                </section>

                                <PageStrip
                                imgSrc="https://expert-themes.com/html/shangrila/images/background/2.jpg"
                                pageTitle ="ENJOY TOGETHER" />


                                <Testmonial/>

                                <Blogs />




        </React.Fragment>
    )
}

export default Home;