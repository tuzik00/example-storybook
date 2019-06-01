import React from 'react';
import cn from 'classnames';

import style from './Heading.styl';


const Heading = (props) => {
    const { children, tagName, className, type } = props;

    const classNames = cn(
        style.heading,
        style[`type${type}`],
        className
    );

    const TagName = tagName ? tagName : `h${type}`;

    return (
        <TagName className={classNames}>
            {children}
        </TagName>
    );
};


Heading.defaultProps = {
    type: '1'
};


export default Heading;
