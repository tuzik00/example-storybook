// @flow

import React from 'react';
import {storiesOf, setAddon} from '@storybook/react';
import {withKnobs, boolean, number} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {action} from '@storybook/addon-actions';

import { Tabs, Tab } from '../src/components/Tabs';
import Container from '../src/components/Container';

import SidebarWithContent from '../src/storiesDecorators/SidebarWithContent';


storiesOf('Элементы навигации', module)
    .addDecorator(withKnobs)
    .add('Табы', withInfo()((): React.Element<'Container'> => (
        <Container>
            <Tabs
                initialTab={1}
                onChangeTab={action('Tab change')}
                // renderTabBar={(props) => props}
            >
                <Tab heading={<span>Скандалы</span>}>
                    Tab 1
                </Tab>
                <Tab heading="Интриги">
                    Tab 2
                </Tab>
                <Tab heading="Расследования">
                    Tab 3
                </Tab>
            </Tabs>
        </Container>
    )))
    .add('Sidebar', withInfo()((): React.Element<'div'> => (
        <Container>
            <SidebarWithContent/>
        </Container>
    )));
