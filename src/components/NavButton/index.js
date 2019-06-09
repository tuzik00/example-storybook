import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './NavButton.styl';


const NavButton = (props) => {
    const {
        isActive,
        onClick,
        className,
    } = props;

    return (
        <div
            className={cn(className, 'NavButton', isActive && 'NavButton_active')}
            onClick={onClick}
        >
            <div />
        </div>
    );
};

NavButton.propTypes = {
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
};


NavButton.defaultProps = {
    onClick: () => {},
};


export default NavButton;