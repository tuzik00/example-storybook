import React from 'react';
import cn from 'classnames';

import style from './Img.styl';


const Img = (props) => {
    const {
        src,
        className,
        alt,
        ...otherProps
    } = props;

    const classNames = cn(
        style.img,
        className
    );

    return (
        <img
            src={src}
            alt={alt}
            className={classNames}
            {...otherProps}
       />
    );
};


export default Img;
