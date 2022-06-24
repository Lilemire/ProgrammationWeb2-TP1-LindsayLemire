import React from 'react';

const IconYoutube = ({src, alt, loading ="lazy"}) => {
    return <img className='iconYt' src={src} alt={alt} loading={loading}/> ;
}

export default IconYoutube;