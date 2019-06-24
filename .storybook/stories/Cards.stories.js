import React from 'react';
import {storiesOf} from '@storybook/react';
import {boolean} from '@storybook/addon-knobs';

import CardDecorator from '../storiesDecorators/CardDecorator';

import {
    Card,
} from '../../src';


storiesOf('Карточки', module)
    .addDecorator(CardDecorator)
    .add('Базовая карточка', () => (
        <Card dark={boolean('dark', false)}>
            <Card.Container>
                Header
            </Card.Container>
            <Card.Media>
                Body
            </Card.Media>
            <Card.Container>
                footer
            </Card.Container>
        </Card>
    ));
