// @flow

import React from 'react';
import cn from 'classnames';

import style from './Row.styl';


type PropsType = {
    children: React.Node,
    className?: string
};


const Row = (props: PropsType): React.Element<'div'> => {
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
