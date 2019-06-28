import React from 'react';
import {storiesOf} from '@storybook/react';

import {
    FullCalendar,
} from '../../src';


storiesOf('Календарь', module)
    .add('FullCalendar', () => (
        <FullCalendar/>
    ));
