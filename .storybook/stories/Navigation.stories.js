import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import {Tabs, Tab} from '../../src/components/Tabs';
import Sidebar from '../../src/components/Sidebar';

import SidebarWithContentDecorator from '../storiesDecorators/SidebarWithContentDecorator';


storiesOf('Элементы навигации', module)
    .add('Табы',() => (
        <Tabs
            initialTab={1}
            onChangeTab={action('Tab change')}
        >
            <Tab heading={<span>Tab 1</span>}>
                <div>Tab 1</div>
            </Tab>
            <Tab heading="Tab 2">
                Tab 2
            </Tab>
            <Tab heading="Tab 3">
                Tab 3
            </Tab>
        </Tabs>
    ))
    .add('Sidebar', () => <SidebarWithContentDecorator/>);
