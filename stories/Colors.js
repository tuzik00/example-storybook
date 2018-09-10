// @flow

import React from 'react';
import {storiesOf} from '@storybook/react';

import colors from '../src/styles/config/colors.json';
import style from './styles.styl';


const Colors = (props: object): React.Element<'div'> => {
    return (
        <div className={style.colors}>
            {props.children}
        </div>
    );
};

const Color = (props: object): React.Element<'div'> => {
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


storiesOf('Цвета', module)
    .add('Палитра', (): React.Element<'Button'> => (
        <Colors>
            {Object
                .keys(colors)
                .map((color: string): React.Element<'Color'> =>
                    <Color
                        color={colors[color]}
                        var={color}
                    />
                )}
        </Colors>
    ));
