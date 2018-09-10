// @flow

import React from 'react';
import cn from 'classnames';

import style from './Input.styl';


type PropsType = {
    onClick?: func,
    onFocus?: func,
    onBlur?: func,
    onChange?: func,
    placeholder?: string,
    disabled?: boolean,
    className?: string,
    type: "text" | "number" | "email"
};


const Input = (props: PropsType): React.Element<'Input'> => {
    const inputClasses = cn(
        style.input,
        props.className,
        props.disabled && style.disabled
    );

    return (
        <input
            {...props}
            className={inputClasses}
            ref={(ref: {}): React.Ref<'input'> => props.ref(ref)}
            placeholder={props.placeholder}
            type={props.type}
            onClick={(e: {}) => { props.onClick(e.target.value) }}
            onFocus={(e: {}) => { props.onFocus(e.target.value) }}
            onBlur={(e: {}) => { props.onBlur(e.target.value) }}
            onChange={(e: {}) => { props.onChange(e.target.value) }}
        >
            {props.children}
        </input>
    );
};

Input.defaultProps = {
    ref: (ref: {}): React.Element<'input'> => ref
};


export default Input;
