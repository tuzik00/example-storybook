import React from 'react';

import colors from '../../../src/config/colors.json';

import style from './ColorsDecorator.styl';


const Color = (props) => {
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


const ColorDecorator = () => {
    return (
        <div className={style.colors_decorator}>
            {Object
                .keys(colors)
                .map((colorName) => (
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
