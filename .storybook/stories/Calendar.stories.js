import React from 'react';
import {storiesOf} from '@storybook/react';

import {
    FullCalendar,
} from '../../src';


storiesOf('Календарь', module)
    .add('FullCalendar', () => (
        <FullCalendar
            events={[
                {
                    id: '1',
                    resourceId: 'a',
                    title: 'Meeting',
                    start: '2019-07-05 22:40',
                    data: {
                        test: 'test'
                    }
                }
            ]}
            renderDay={(day) => {
                return day;
            }}
            onEventClick={(e) => {
                console.log(e)
            }}
        />
    ));
