// @flow

import React from 'react';
import cn from 'classnames';

import style from './Card.styl';


type PropsType = {
    children: React.node,
    className?: string
};


const Card = (props: PropsType): React.Element<'section'> => {
    const { children, className } = props;

    return (
        <section className={cn(style.card, className)}>
            {children}
        </section>
    );
};


export default Card;