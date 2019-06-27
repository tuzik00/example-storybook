import React from 'react';

import './Column.styl';


const Column = (props) => {
       const {
        children,
    } = props;

    return (
        <div className={'Column'}>
            {children}
        </div>
    )
};

Column.propTypes = {};
Column.defaultProps = {};


export default Column;