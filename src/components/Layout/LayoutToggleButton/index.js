import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './LayoutToggleButton.styl';


const LayoutToggleButton = (props) => {
    const {
        isActive,
        onClick,
        className,
    } = props;

    return (
        <div
            className={cn(className, 'LayoutToggleButton', isActive && 'LayoutToggleButton_active')}
            onClick={onClick}
        >
            <div />
        </div>
    );
};

LayoutToggleButton.propTypes = {
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
};


LayoutToggleButton.defaultProps = {
    onClick: () => {},
};


export default LayoutToggleButton;