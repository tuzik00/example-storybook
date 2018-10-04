// @flow

import React from 'react';
import cn from 'classnames';

import style from './Img.styl';


export type PropsType = {
    src: boolean,
    className?: string
};


const Img = (props: PropsType): React.Element<'img'> => {
    const {src, className, ...otherProps} = props;

    const classNames = cn(
        style.img,
        className
    );

    return (
        <img
            src={src}
            className={classNames}
            {...otherProps}
       />
    );
};


export default Img;
