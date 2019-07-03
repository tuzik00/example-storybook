import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Button.styl';


const Button = (props) => {
    const {
        size,
        style,
        color,
        children,
        className,
        disabled,
        block,
        onClick,
        transparent,
        bordered,
        bold,
        tagName,
        dark,
        ...otherProps
    } = props;

    const classNames = cn(className, 'Button',
        !!size && [`Button_size_${size}`],
        !!color && [`Button_color_${color}`],
        !onClick && 'Button_inactive',
        disabled && 'Button_disabled',
        block && 'Button_block',
        transparent && [`Button_transparent_${color}`],
        bordered && `Button_bordered_${color}`,
        bold && 'Button_bold',
        dark && 'Button_theme-dark',
    );

    const TagName = tagName || 'button';

    return (
        <TagName
            style={style}
            className={classNames}
            onClick={onClick}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </TagName>
    );
};

Button.propTypes = {
    size: PropTypes.oneOf(['small', 'normal', 'large', 'big']),
    color: PropTypes.oneOf(['default', 'primary', 'success', 'info', 'warning', 'danger']),
    transparent: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    block: PropTypes.bool,
    bordered: PropTypes.bool,
    onClick: PropTypes.func,
    tagName: PropTypes.string,
    dark: PropTypes.bool,
};

Button.defaultProps = {
    size: 'normal',
    color: 'default',
};


export default Button;
