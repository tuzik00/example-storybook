// @flow

import React, {Component} from 'react';
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


class Button extends Component<PropsType & ColorsType & SizesType> {
    state = {
        start: false
    };

    render(): React.Element<'Button'> {
        const {children, onClick, ...props} = this.props;

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
                onClick={(): func => {
                    onClick();
                    this.setState({
                        start: true
                    })
                }}
                className={buttonClasses}
            >
                {children}
            </button>
        );
    }
};

Button.defaultProps = {
    ref: (ref: {}): React.Element<'button'> => ref,
    onClick: () => {
    }
};


export default Button;
