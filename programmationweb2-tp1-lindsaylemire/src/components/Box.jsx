import React, {useState} from "react";

const Box = ({children, anotherClassName}) => {
    const [isHovered, setIsHovered] = useState(false);

    const onMouseEnter = () => setIsHovered(true);

    const onMouseLeave = () => setIsHovered(false);

    const additionalHoverClassName = isHovered ? "hoveredsections" : "";
    const className = `${additionalHoverClassName} ${anotherClassName}`;

    return (
        <div
            className={className}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>{children}</div>
    );
}

export default Box;