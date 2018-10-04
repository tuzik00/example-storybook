// @flow

import React from 'react';

import colors from '../../config/colors.json';

import style from './ColorsDecorator.styl';


type ColorPropsType = {
    color: string,
    var: string
};

const Color = (props: ColorPropsType): React.Element<'div'> => {
    return (
        <div
            className={style.color_decorator}
            style={{background: props.color}}
        >
            <div className={style.color_decorator_info}>
                <div>${props.var}-color</div>
                <div>{props.color}</div>
            </div>
        </div>
    );
};


const ColorDecorator = (): React.Element<'div'> => {
    return (
        <div className={style.colors_decorator}>
            {Object
                .keys(colors)
                .map((colorName: string): {color: string, var: string} => (
                    <Color
                        color={colors[colorName]}
                        var={colorName}
                    />
                ))
            }
        </div>
    )
};


export default ColorDecorator;
