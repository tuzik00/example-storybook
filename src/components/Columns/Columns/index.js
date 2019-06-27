import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Columns.styl';


const Columns = (props) => {
    const {
        children,
        dark,
    } = props;

    return (
        <div className={cn('Columns', dark && 'Columns_theme-dark')}>
            {children}
        </div>
    )
};

Columns.propTypes = {
    dark: PropTypes.bool,
    children: PropTypes.node,
};

Columns.defaultProps = {};


export default Columns;