// @flow

import React from 'react';
import cn from 'classnames';

import style from './Content.styl';


type PropsType = {
    children?: React.Node,
    className?: string
};


const Content = (props: PropsType): React.Element<'h1'> => {
    const { classNames, children } = props;

    return (
        <p className={cn(style.content, classNames)}>
            {children}
        </p>
    );
};


export default Content;
