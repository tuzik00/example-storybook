import React from 'react';
import PropTypes from 'prop-types';
import './Column.styl';


const Column = (props) => {
       const {
        children,
        flex,
    } = props;

    return (
        <div
            style={{flex}}
            className={'Column'}
        >
            {children}
        </div>
    )
};

Column.propTypes = {
    flex: PropTypes.number,
};

Column.defaultProps = {
    flex: 0,
};


export default Column;