import React from "react";

const TestFun = (props) =>{
      let geturl = props.pathname;
        return(
                <React.Fragment>
                            {geturl === "/test/vinod" ? <button>Pro user</button> : null}
                            <p> Cureetn Url &nbsp; {geturl}</p>
                </React.Fragment>
        )
}

export default TestFun;