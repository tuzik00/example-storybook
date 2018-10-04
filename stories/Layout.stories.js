import React from 'react';
import {storiesOf} from '@storybook/react';

import Container from '../src/components/Container';
import Position from '../src/components/Position';
import Overlay from '../src/components/Overlay';
import { Header, Body, Footer } from '../src/components/Layout';


storiesOf('Layout', module)
    .addWithDoc('Container', Container, 'Добавляет отступ по краям', () => (
        <Container>
            Container
        </Container>
    ))
    .addWithDoc('Position', Position, 'Выравнивание компонентов', () => (
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
    .addWithDoc('Layout', Header, null, () => (
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
    .addWithDoc('Overlay', Overlay, null, () => <Overlay show={true} />);

