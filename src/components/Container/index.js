// @flow

import React from 'react';
import cn from 'classnames';

import style from './Container.styl';


type PropsType = {
    children: React.Node,
    className?: string
};


const Container = (props: PropsType): React.Element<'div'> => {
    return (
        <div className={cn(style.container, props.className)}>
            {props.children}
        </div>
    );
};


export default Container;
