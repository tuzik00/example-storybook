import React from 'react'

import style from './GridItemDecorator.styl';


const GridItemDecorator = (props) => {
    const { children } = props;

    return (
        <div className={style.item}>
            {children}
        </div>
    );
};


export default GridItemDecorator;
