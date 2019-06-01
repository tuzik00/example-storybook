import React from 'react';
import cn from 'classnames';

import style from './Input.styl';


const Input = (props) => {
    const { children, className, disabled, type, ...otherProps } = props;

    const classNames = cn(
        style.input,
        disabled && style.disabled,
        className
    );

    return (
        <input
            type={type}
            className={classNames}
            {...otherProps}
        >
            {children}
        </input>
    );
};


Input.defaultType = {
    type: 'text'
};


export default Input;
