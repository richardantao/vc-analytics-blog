import React from "react";

import { Spinner } from "reactstrap";

export default () => {
    return <Spinner 
        style={{ 
            fontSize: "4rem", 
            height: "10rem", 
            position: "fixed",
            left: "42%",
            top: "40%",
            width: "10rem"
        }} 
        color="primary" 
    />
};