import React from 'react';

const Icondown = ({src, alt, loading ="lazy"}) => {
    return <img className='iconDown' src={src} alt={alt} loading={loading}/> ;
}

export default Icondown;