import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import LayoutToggleButton from '../LayoutToggleButton';

import './LayoutNav.styl';


const LayoutNav = (props) => {
    const {
        onToggle,
        isSidebarActive,
        children,
        dark,
    } = props;

    return (
        <nav className={cn('LayoutNav', dark && 'LayoutNav_theme-dark')}>
            <LayoutToggleButton
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
    dark: PropTypes.bool,
};

LayoutNav.defaultProps = {
    isSidebarActive: false,
    onToggle: () => {},
    dark: false,
};

export default LayoutNav