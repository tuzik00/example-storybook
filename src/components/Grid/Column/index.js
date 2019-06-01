import React from 'react';
import cn from 'classnames';

import style from './Column.styl';


const Column = (props) => {
    const { children, className } = props;

    const columnStyle = {
        flex: props.flex
    };

    const classNames = cn(
        style.column,
        className
    );

    return (
        <div
            style={columnStyle}
            className={classNames}
        >
            {children}
        </div>
    );
};


Column.defaultProps = {
    flex: 1
};


export default Column;
