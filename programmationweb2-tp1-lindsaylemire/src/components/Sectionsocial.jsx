import React from 'react'

const Sectionsocial = ({as = 'facebook', children}) => {
    switch (as) {
        case "twitter":
            return <div className='twitter'>{children}</div>;
        case "instagram":
            return <div className='instagram'>{children}</div>;
        case "youtube":
            return <div className='youtube'>{children}</div>;
        default:
            return <div className='facebook'>{children}</div>;
    }
}

export default Sectionsocial;