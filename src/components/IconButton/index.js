import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import * as Icons from '../../assets/icons';

import './IconButton.styl';


const IconButton = (props) => {
    const {
        className,
        name,
        primary,
        success,
        info,
        warning,
        danger,
        gray,
        transparent,
        disabled,
        onClick,
        size,
        position,
        children,
        bold,
    } = props;

    const classNames = cn(className, 'IconButton', {
        'IconButton_transparent': transparent,
        'IconButton_disabled': disabled,
        'IconButton_color_gray': gray,
        'IconButton_color_primary': primary,
        'IconButton_color_success': success,
        'IconButton_color_info': info,
        'IconButton_color_warning': warning,
        'IconButton_color_danger': danger,
        'IconButton_bold': bold,
        [`IconButton_size_${size}`]: !size,
        [`IconButton_position_${position}`]: !!position,
    });

    const Icon = Icons[name];

    const iconSize = {
        small: '14px',
        normal: '18px',
        large: '24px',
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={classNames}
        >
            <span className={cn('IconButton__text')}>
                {children}
            </span>

            <Icon width={iconSize[size] || iconSize.small}/>
        </button>
    );
};

IconButton.propTypes = {
    disabled: PropTypes.bool,
    name: PropTypes.string.isRequired,
    primary: PropTypes.bool,
    success: PropTypes.bool,
    info: PropTypes.bool,
    warning: PropTypes.bool,
    danger: PropTypes.bool,
    gray: PropTypes.bool,
    transparent: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
    size: PropTypes.oneOf(['small', 'normal', 'large']),
    position: PropTypes.oneOf(['left', 'right']),
    children: PropTypes.node,
    bold: PropTypes.bool,
};

IconButton.defaultProps = {
    disabled: false,
    primary: false,
    success: false,
    info: false,
    warning: false,
    danger: false,
    gray: false,
    transparent: false,
    onClick: () => {},
    position: 'right',
    size: 'normal'
};


export default IconButton;
