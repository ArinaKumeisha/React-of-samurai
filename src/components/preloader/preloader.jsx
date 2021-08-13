import React from 'react';
import preloader from "../../assets/image/preloader.gif";

const Preloader = () => {
    return (
        <div>
            <img src={preloader} style={{width: "300px"}}/>
        </div>
    );
};

export default Preloader;