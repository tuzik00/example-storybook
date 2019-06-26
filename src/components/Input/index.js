import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Input.styl';


const Input = (props) => {
    const {
        children,
        className,
        disabled,
        type,
        dark,
        ...rest
    } = props;

    const classNames = cn(
        'Input',
        disabled && 'Input_input',
        dark && 'Input_theme-dark',
        className,
    );

    return (
        <input
            type={type}
            className={classNames}
            {...rest}
        >
            {children}
        </input>
    );
};

Input.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    dark: PropTypes.bool,
};

Input.defaultType = {
    type: 'text'
};


export default Input;
