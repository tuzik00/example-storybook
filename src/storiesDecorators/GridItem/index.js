// @flow

import React from 'react'

import style from './GridItem.styl';


type PropsType = {
    children: string
};


const GridItem = (props: PropsType): React.Element<'div'> => {
    return (
        <div className={style.item}>
            {props.children}
        </div>
    );
};


export default GridItem;
