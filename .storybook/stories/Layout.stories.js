import React from 'react';
import {storiesOf} from '@storybook/react';

import {
    Container,
    Position,
    Overlay,
    Header,
    Body,
    Footer,
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
        <div>
            <Header>
                Header
            </Header>
            <Body>
            Body
            </Body>
            <Footer>
                Footer
            </Footer>
        </div>
    ))
    .add('Overlay', () => <Overlay show={true} />);

