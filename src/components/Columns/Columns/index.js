import React from 'react';

import './Columns.styl';


const Columns = (props) => {
    const {
        children,
    } = props;

    return (
        <div className={'Columns'}>
            {children}
        </div>
    )
};

Columns.propTypes = {};
Columns.defaultProps = {};


export default Columns;