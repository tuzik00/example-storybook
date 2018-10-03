// @flow

import React from 'react';
import cn from 'classnames';

import style from './Card.styl';


type PropsType = {
    children: React.node,
    className?: string
};


export default (props: PropsType): React.Element<'section'> => {
    const { children, className } = props;

    return (
        <section className={cn(style.card, className)}>
            {children}
        </section>
    );
};
