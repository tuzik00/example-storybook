import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import * as Icons from 'assets/icons';

import './IconButton.styl';
import Button from '../Button';


const IconButton = (props) => {
     const {
        size,
        color,
        children,
        className,
        disabled,
        block,
        onClick,
        transparent,
        bordered,
        tagName,
        bold,
        icon,
        position,
        ...otherProps
    } = props;

    const classNames = cn(className, 'IconButton',
        !!position && [`IconButton_position_${position}`]
    );

    return (
        <Button
            className={classNames}
            size={size}
            bold={bold}
            color={color}
            disabled={disabled}
            block={block}
            onClick={onClick}
            transparent={transparent}
            bordered={bordered}
            tagName={tagName}
            {...otherProps}
        >
            {children ? (
                <span className={cn('IconButton__text')}>
                    {children}
                </span>
            ) : null}
            {icon}
        </Button>
    );
};

IconButton.propTypes = {
    size: PropTypes.oneOf(['small', 'normal', 'large', 'big']),
    color: PropTypes.oneOf(['default', 'primary', 'success', 'info', 'warning', 'danger']),
    position: PropTypes.oneOf(['left', 'right']),
    transparent: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    block: PropTypes.bool,
    bordered: PropTypes.bool,
    onClick: PropTypes.func,
    tagName: PropTypes.string,
    icon: PropTypes.node,
};

IconButton.defaultProps = {
    size: 'normal',
    color: 'default',
    position: 'right',
};


export default IconButton;
