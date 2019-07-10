import React from 'react';
import {storiesOf} from '@storybook/react';
import {boolean} from '@storybook/addon-knobs';

import {Loader} from '../../src';


storiesOf('Лоадеры ', module)
    .add('Спиннер', () => (
        <Loader
            isBlock={boolean('isBlock', false)}
        />
    ));
