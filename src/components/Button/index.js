// @flow

import React from 'react';
import cn from 'classnames';

import {ColorsType, SizesType} from "../../constants/types";
import style from './Button.styl';


type PropsType = {
    children: string,
    onClick?: func,
    disabled?: boolean,
    ref?: func,
    block?: boolean,
    className?: string
};


const Button = (props: PropsType & ColorsType & SizesType): React.Element<'button'> => {
    const buttonClasses = cn(
        style.button,
        props.className,
        props.disabled && style.disabled,
        props.block && style.block,

        //sizes
        props.small && style.small,
        props.large && style.large,
        props.big && style.big,

        //colors
        props.primary && style.primary,
        props.success && style.success,
        props.info && style.info,
        props.warning && style.warning,
        props.danger && style.danger
    );

    return (
        <button
            onClick={props.onClick}
            ref={props.ref}
            className={buttonClasses}
        >
            {props.children}
        </button>
    );
};

Button.defaultProps = {
    ref: (ref: {}): React.Element<'button'> => ref
};


export default Button;
