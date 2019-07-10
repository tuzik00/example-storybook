import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import {
    ThreeDotsLoaderIcon,
} from '../..'

import './Loader.styl';


const Loader = (props) => {
    const {
        className,
    } = props;

    return (
        <div className={cn(
            className,
            'Loader',
        )}>
            <ThreeDotsLoaderIcon/>
        </div>
    );
};

Loader.propTypes = {
    className: PropTypes.string,
    isBlock: PropTypes.bool,
};


export default Loader;