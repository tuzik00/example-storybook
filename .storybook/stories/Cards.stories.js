import React from 'react';
import {storiesOf} from '@storybook/react';
import {boolean} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';


import CardDecorator from '../storiesDecorators/CardDecorator';

import {
    Card,
    CardIconButton,
    VKIcon,
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
    ))
    .add('Карточка кнопка', () => (
        <CardIconButton
            icon={<VKIcon/>}
            onClick={action('onClick')}
        >
            Карточка кнопка
        </CardIconButton>
    ));
