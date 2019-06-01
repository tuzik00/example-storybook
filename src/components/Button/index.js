import React from 'react';
import cn from 'classnames';
import style from './Button.styl';


const Button = (props) => {
    const {small, large, big} = props;
    const {primary, success, info, warning, danger } = props;

    const {children, className, disabled, block, ...otherProps} = props;

    const classNames = cn(
        style.button,
        disabled && style.disabled,
        block && style.block,
        small   && style.small,
        large   && style.large,
        big     && style.big,
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
