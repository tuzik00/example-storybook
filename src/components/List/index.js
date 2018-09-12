// @flow

import React from 'react';
import cn from 'classnames';

import style from './List.styl';


type PropsType = {
    children?: React.Node,
    className?: string,
    dotted?: boolean
};


const List = (props: PropsType): React.Element<'ul'> => {
    const { classNames, children, dotted } = props;

    return (
        <section className={cn(style.list, dotted && style.dotted, classNames)}>
            {children}
        </section>
    );
};


const ListItem = (props: PropsType): React.Element<'li'> => {
    const { classNames, children } = props;

    return (
        <div className={cn(style.item, classNames)}>
            {children}
        </div>
    );
};

export { List, ListItem };
