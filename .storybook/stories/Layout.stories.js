import React from 'react';
import {storiesOf} from '@storybook/react';
import {boolean} from '@storybook/addon-knobs';

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
            dark={boolean('dark', false)}
            isOpenSidebar={boolean('isOpenSidebar', false)}
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

