// @flow

import React from 'react';
import cn from 'classnames';

import style from './Column.styl';


type PropsType = {
    children: React.Node,
    className?: string,
    flex?: number
};


const Column = (props: PropsType): React.Element<'div'> => {
    const columnStyle = {
        flex: props.flex
    };

    return (
        <div
            style={columnStyle}
            className={cn(style.column, props.className)}
        >
            {props.children}
        </div>
    );
};

Column.defaultProps = {
    flex: 1
};


export default Column;
