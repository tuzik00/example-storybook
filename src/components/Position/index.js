import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import './Position.styl';


const Position = (props) => {
    const {
        children,
        left,
        right,
        center,
        className,
    } = props;

    return (
        <div className={
            cn(
                className,
                'Position',
                left && 'Position_left',
                right && 'Position_right',
                center && 'Position_center',

            )}
        >
            {children}
        </div>
    );
};

Position.propTypes = {
    left: PropTypes.bool,
    right: PropTypes.bool,
    center: PropTypes.bool,
};


export default Position;