import React from "react";
import Home from "../Pages/Home"
import Menu from '../Pages/Menu'
import About from '../Pages/About'
import Blog from '../Pages/Blog'
import Contact from "../Pages/Contact";
import Gallery from "../Pages/Gallery";
import Test from "../Pages/test";
import BlogDetail from "../component/Blog/BlogDetail";
import Error from "../Pages/Error";
import {useLocation, Route, Switch} from 'react-router-dom';

const RouterFun = () => {
          const location = useLocation();
            return (
                    <React.Fragment>
                           
                            <Switch>
                                <Route  exact path="/" render={Home}></Route>
                                <Route exact path="/menu" render={Menu}></Route>
                                <Route exact path="/about" render={About}></Route>
                                <Route exact path="/blog" render={Blog}></Route>
                                <Route exact path="/contact" render={Contact}></Route>
                                <Route exact path="/gallery" render={Gallery}></Route>
                                <Route exact path="/blogdetail/:id" render={props => (
                                      <BlogDetail {...props} />  
                                )}></Route>
                                <Route exact path="/test" render={props => (
                                    <Test {...location}/>    
                                )}></Route>
                                <Route component={Error}></Route>
                            </Switch>   
                    </React.Fragment>
            )
}

export default RouterFun;