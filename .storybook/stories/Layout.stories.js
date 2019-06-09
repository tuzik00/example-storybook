import React from 'react';
import {storiesOf} from '@storybook/react';

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
            sidebar={(
                <ul>
                    <li>link</li>
                    <li>link</li>
                    <li>link</li>
                </ul>
            )}
            nav={(
                <ul>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                </ul>
            )}
        >
            <section>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
            </section>
        </Layout>
    ))
    .add('Overlay', () => <Overlay show={true}/>);

