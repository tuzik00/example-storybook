import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Tab.styl';


const Tab = (props) => {
    return (
        <div className={cn('Tab', props.className)}>
            {props.children}
        </div>
    );
};

Tab.propTypes = {
    heading: PropTypes.node,
    className: PropTypes.string,
    children: PropTypes.node,
};


export default Tab;
