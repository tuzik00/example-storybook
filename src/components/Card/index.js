import React from 'react';
import cn from 'classnames';

import style from './Card.styl';


const Card = (props) => {
    const { children, className } = props;

    return (
        <section className={cn(style.card, className)}>
            {children}
        </section>
    );
};


export default Card;