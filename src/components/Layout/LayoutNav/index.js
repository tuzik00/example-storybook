import React from 'react';
import PropTypes from 'prop-types';
import {NavButton} from '../../..';

import './LayoutNav.styl';


const LayoutNav = (props) => {
    const {
        onToggle,
        isSidebarActive,
        children,
    } = props;

    return (
        <nav className={'LayoutNav'}>
            <NavButton
                className={'LayoutNav__toggle'}
                onClick={() => onToggle(!isSidebarActive)}
                isActive={isSidebarActive}
            />
            {children}
        </nav>
    );
};

LayoutNav.propTypes = {
    isSidebarActive: PropTypes.bool,
    onToggle: PropTypes.func,
};

LayoutNav.defaultProps = {
    isSidebarActive: false,
    onToggle: () => {},
};

export default LayoutNav