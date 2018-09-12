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
    const { children, className } = props;

    const columnStyle = {
        flex: props.flex
    };

    const columnClassNames = cn(
        style.column,
        className
    );

    return (
        <div
            style={columnStyle}
            className={columnClassNames}
        >
            {children}
        </div>
    );
};

Column.defaultProps = {
    flex: 1
};


export default Column;
