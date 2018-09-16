// @flow

import React from 'react';
import cn from 'classnames';

import style from './Tab.styl';


type PropsType = {
    children: React.Node,
    className?: string
};


const Tab = (props: PropsType): React.Element<'div'> => {
    return (
        <div className={cn(style.tab, props.className)}>
            {props.children}
        </div>
    );
};


export default Tab;
