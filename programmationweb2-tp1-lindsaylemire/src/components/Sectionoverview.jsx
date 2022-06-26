import React from 'react';

const Sectionoverview = ({as = 'ovpgfacebook', children}) => {
    switch (as) {
        case "ovpgtwitter":
            return <div className='ovpgtwitter'>{children}</div>;
        case "ovlktwitter":
            return <div className='ovlktwitter'>{children}</div>;
        case "ovpginstagram":
            return <div className='ovpginstagram'>{children}</div>;
        case "ovlkinstagram":
            return <div className='ovlkinstagram'>{children}</div>;
        case "ovpgyoutube":
            return <div className='ovpgyoutube'>{children}</div>;
        case "ovlkyoutube":
            return <div className='ovlkyoutube'>{children}</div>;
        case "ovpgfacebook":
            return <div className='ovpgfacebook'>{children}</div>;
        default:
            return <div className='ovlkfacebook'>{children}</div>;
    }
}

export default Sectionoverview;