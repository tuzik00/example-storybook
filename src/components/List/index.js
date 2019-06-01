import React from 'react';
import cn from 'classnames';

import style from './List.styl';


const List = (props) => {
    const { classNames, children, dotted } = props;

    return (
        <section className={cn(style.list, dotted && style.dotted, classNames)}>
            {children}
        </section>
    );
};


List.defaultProps = {
    dotted: false
};


const ListItem = (props) => {
    const { classNames, children } = props;

    return (
        <div className={cn(style.item, classNames)}>
            {children}
        </div>
    );
};

export { List, ListItem };
