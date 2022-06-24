import React from 'react';

const Iconinstagram = ({src, alt, loading ="lazy"}) => {
    return <img className='iconIg' src={src} alt={alt} loading={loading}/> ;
}

export default Iconinstagram;