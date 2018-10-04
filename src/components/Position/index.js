// @flow

import React, {Component} from 'react';
import cn from 'classnames';

import style from './Position.styl';


type PropsType = {
    children: string,
    className?: string,
    left?: boolean,
    right?: boolean,
    center?: boolean
};

const Position = (props: PropsType): React.Element<'div'> => {
    const {children, left, right, center, className} = props;

    return (
        <div className={cn(
                style.position,
                left && style.left,
                right && style.right,
                center && style.center,
                className
            )}
        >
            {children}
        </div>
    );
};


export default Position;