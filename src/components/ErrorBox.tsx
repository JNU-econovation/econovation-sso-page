import React from "react";

const ErrorBox = ({children}:{ children: string }) => {
    return <div style={{color : '#d2001a', fontSize:'0.8rem'}}>{children}</div>
};

export default ErrorBox;