import React from 'react';
import {storiesOf} from '@storybook/react';

import ColorsDecorator from '../storiesDecorators/ColorsDecorator';


storiesOf('Цвета', module)
    .add('Палитра', () => <ColorsDecorator/>);

