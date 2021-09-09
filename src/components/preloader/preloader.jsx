import React from 'react';
import prelo from '../../assets/image/prelo.webp'

const Preloader = () => {
    return (
        <div>
            <img src={prelo} style={{width: "300px"}}/>
        </div>
    )
}

export default Preloader;