import React from 'react';
import {storiesOf} from '@storybook/react';

import Container from '../../src/components/Container';
import Position from '../../src/components/Position';
import Overlay from '../../src/components/Overlay';
import { Header, Body, Footer } from '../../src/components/Layout';


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

