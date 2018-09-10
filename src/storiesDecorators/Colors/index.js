// @flow

import React from 'react';
import style from './Colors.styl';


type ColorsPropsType = {
    children: React.Node
};

const Colors = (props: ColorsPropsType): React.Element<'div'> => {
    return (
        <div className={style.colors}>
            {props.children}
        </div>
    );
};


type ColorPropsType = {
    color: string,
    var: string
};

const Color = (props: ColorPropsType): React.Element<'div'> => {
    return (
        <div
            className={style.color}
            style={{background: `${props.color}`}}
        >
            <div>${props.var}-color</div>
            <div>{props.color}</div>
        </div>
    );
};


export { Color, Colors };