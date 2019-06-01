import React from 'react';
import cn from 'classnames';

import style from './Row.styl';


const Row = (props) => {
    const classNames = cn(
        style.row,
        props.className
    );

    return (
        <div className={classNames}>
            {props.children}
        </div>
    );
};


export default Row;
