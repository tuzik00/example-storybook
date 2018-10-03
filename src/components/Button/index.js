// @flow

import React from 'react';
import cn from 'classnames';

import {
    ColorsType,
    SizesType
} from "../../constants/types";

import style from './Button.styl';


export type PropsType = {
    children: string | React.Node,
    disabled?: boolean,
    block?: boolean,
    className?: string
} & ColorsType & SizesType;


const Button = <PropsType>(props: PropsType): React.Element<'button'> => {
    const {small, large, big} = props;
    const {primary, success, info, warning, danger } = props;

    const {children, className, disabled, block, ...otherProps} = props;

    const classNames = cn(
        style.button,
        disabled && style.disabled,
        block && style.block,

        //sizes
        small   && style.small,
        large   && style.large,
        big     && style.big,

        //colors
        primary && style.primary,
        success && style.success,
        info    && style.info,
        warning && style.warning,
        danger  && style.danger,
        className
    );

    return (
        <button
            className={classNames}
            {...otherProps}
        >
            {children}
        </button>
    );
};


Button.defaultProps = {
    disabled: false,
    block: false
};


export default Button;
