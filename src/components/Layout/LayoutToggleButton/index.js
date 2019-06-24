import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './LayoutToggleButton.styl';


const LayoutToggleButton = (props) => {
    const {
        isActive,
        onClick,
        className,
        dark,
    } = props;

    return (
        <div
            className={cn(
                className,
                'LayoutToggleButton',
                isActive && 'LayoutToggleButton_active',
                dark && 'LayoutToggleButton_theme-dark',
            )}
            onClick={onClick}
        >
            <div/>
        </div>
    );
};

LayoutToggleButton.propTypes = {
    dark: PropTypes.bool,
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
};


LayoutToggleButton.defaultProps = {
    onClick: () => {
    },
};


export default LayoutToggleButton;