import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Container.styl';


const Container = (props) => {
    const {
        children,
        className,
        size,
        top,
        bottom,
        left,
        right,
        flexGrow,
        flex,
    } = props;

    const classNames = cn(
        className,
        'Container',
        !!size && `Container_size_${size}`,
        !!top && `Container_top_${top}`,
        !!bottom && `Container_bottom_${bottom}`,
        !!left && `Container_left_${left}`,
        !!right && `Container_right_${right}`,
        flexGrow && 'Container_flex-grow',
        flex && 'Container_flex',
    );

    return (
        <div className={classNames}>
            {children}
        </div>
    );
};

Container.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    size: PropTypes.number,
    top: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
    flexGrow: PropTypes.bool,
};

export default Container;
