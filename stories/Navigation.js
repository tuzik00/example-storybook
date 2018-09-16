// @flow

import React from 'react';
import {storiesOf, setAddon} from '@storybook/react';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {action} from '@storybook/addon-actions';

import { Tabs, Tab } from '../src/components/Tabs';
import Container from '../src/components/Container';


storiesOf('Элементы навигации', module)
    .addDecorator(withKnobs)
    .add('Табы', withInfo()((): React.Element<'Container'> => (
        <Container>
            <Tabs
                onChangeTab={action('Tab change')}
                // renderTabBar={action('render label')}
                initialTab={2}
            >
                <Tab heading={'test'}>
                    content 1
                </Tab>
                <Tab heading={'test'}>
                    content 2
                </Tab>
                <Tab heading={'test'}>
                    content 3
                </Tab>
            </Tabs>
        </Container>
    )));
