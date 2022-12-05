import React from "react";
import { Oval } from "react-loader-spinner";

const Spinner = () => {
    return <Oval
        wrapperStyle={{
            justifyContent:'center',
            alignItems:'center'
        }}
        height={24}
        width={24}
        color="#ffffff"
        visible={true} 
        secondaryColor='#ffffff'
    />;
};

export default Spinner;