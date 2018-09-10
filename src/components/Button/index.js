// @flow

import React from 'react';
import cn from 'classnames';

import {ColorsType, SizesType} from "../../constants/types";
import style from './Button.styl';


type PropsType = {
    children: string,
    onClick?: func,
    disabled?: boolean
};


const Button = (props: PropsType & ColorsType & SizesType): React.Element<'button'> => {
    const buttonClasses = cn(style.button,
        (props.disabled && style.disabled),
        //sizes
        (props.small && style.small),
        (props.large && style.large),
        (props.big && style.big),
        //colors
        (props.primary && style.primary),
        (props.success && style.success),
        (props.info && style.info),
        (props.warning && style.warning),
        (props.danger && style.danger)
    );

    return (
        <button className={buttonClasses}>
            {props.children}
        </button>
    );
};


export default Button;
