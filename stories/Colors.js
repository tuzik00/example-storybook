// @flow

import React from 'react';
import {storiesOf} from '@storybook/react';

import { Color, Colors } from '../src/storiesDecorators/Colors';
import colors from '../src/config/colors.json';



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
