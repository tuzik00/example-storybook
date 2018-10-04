// @flow

import React from 'react'

import style from './GridItemDecorator.styl';


type PropsType = {
    children: string
};


const GridItemDecorator = (props: PropsType): React.Element<'div'> => {
    const { children } = props;

    return (
        <div className={style.item}>
            {children}
        </div>
    );
};


export default GridItemDecorator;
