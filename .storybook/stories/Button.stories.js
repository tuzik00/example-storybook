import React from 'react';
import {storiesOf} from '@storybook/react';
import {boolean, select} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';

import { Button, IconButton } from '../../src';
import { PushPinIcon } from '../../src/assets/icons';

storiesOf('Кнопки', module)
    .add('Базовая', () => (
        <Button
            size={select('size', ['small', 'normal', 'large', 'big'], 'normal')}
            color={select('color', ['default', 'primary', 'success', 'info', 'warning', 'danger'], 'default')}
            transparent={boolean('transparent', false)}
            block={boolean('block', false)}
            onClick={action('click')}
            disabled={boolean('disabled', false)}
            bordered={boolean('bordered', false)}
        >
            Button
        </Button>
    ))
    .add('С иконкой', () => (
        <IconButton
            size={select('size', ['small', 'normal', 'large', 'big'], 'normal')}
            color={select('color', ['default', 'primary', 'success', 'info', 'warning', 'danger'], 'default')}
            position={select('position', ['left', 'right'], 'right')}
            transparent={boolean('transparent', false)}
            block={boolean('block', false)}
            onClick={action('click')}
            disabled={boolean('disabled', false)}
            bordered={boolean('bordered', false)}
            icon={<PushPinIcon />}
        >
            IconButton
        </IconButton>
    ));

