import React from 'react';

const Iconup = ({src, alt, loading ="lazy"}) => {
    return <img className='iconUp' src={src} alt={alt} loading={loading}/> ;
}

export default Iconup;