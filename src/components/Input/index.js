// @flow

import React from 'react';
import cn from 'classnames';

import style from './Input.styl';


type PropsType = {
    className?: string,
    type: "text" | "number" | "email"
};


const Input = (props: PropsType): React.Element<'Input'> => {
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


export default Input;
