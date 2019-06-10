import React from 'react';
import {storiesOf} from '@storybook/react';
import {select} from '@storybook/addon-knobs';

import {
    Container,
    Position,
    Overlay,
    Layout,
} from '../../src/';


storiesOf('Layout', module)
    .add('Container', () => (
        <Container>
            Container
        </Container>
    ))
    .add('Position', () => (
        <div>
            <Position left>
                left
            </Position>
            <Position center>
                center
            </Position>
            <Position right>
                right
            </Position>
        </div>
    ))
    .add('Layout', () => (
        <Layout
            theme={select('theme', ['light', 'dark'], 'light')}
            renderSidebar={({ isActive }) => (
                <div>
                    sidebar
                </div>
            )}
            renderNav={() => (
                <div>nav</div>
            )}
        >
            <div>content</div>
        </Layout>
    ))
    .add('Overlay', () => <Overlay isShow={true}/>);

