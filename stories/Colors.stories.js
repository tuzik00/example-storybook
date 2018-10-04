import React from 'react';
import {storiesOf} from '@storybook/react';

import ColorsDecorator from '../src/storiesDecorators/ColorsDecorator';


storiesOf('Цвета', module)
    .add('Палитра', () => <ColorsDecorator/>);

