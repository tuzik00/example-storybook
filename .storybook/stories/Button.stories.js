import React from 'react';
import {storiesOf} from '@storybook/react';
import {boolean} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';

import { Button, IconButton } from '../../src';


storiesOf('Кнопки', module)
    .add('Базовая', () => (
        <Button
            onClick={action('Button click')}
            disabled={boolean('Disabled', false)}
        >
            Button
        </Button>
    ))
    .add('С иконкой', () => (
        <IconButton
            transparent
            name={'PushPin'}
        />
    ))
    .add('Размеры', () => (
        <ul className="story-list">
            <li>
                <Button small>small</Button>
            </li>
            <li>
                <Button>normal</Button>
            </li>
            <li>
                <Button large>large</Button>
            </li>
            <li>
                <Button big>big</Button>
            </li>
        </ul>
    ))
    .add('Цвета', () => (
        <ul className="story-list">
            <li>
                <Button>default</Button>
            </li>
            <li>
                <Button primary>primary</Button>
            </li>
            <li>
                <Button success>success</Button>
            </li>
            <li>
                <Button info>info</Button>
            </li>
            <li>
                <Button warning>warning</Button>
            </li>
            <li>
                <Button danger>danger</Button>
            </li>
        </ul>
    ))
    .add('Широкие', () => (
        <ul className="story-list">
            <li>
                <Button block>default</Button>
            </li>
            <li>
                <Button block primary>primary</Button>
            </li>
            <li>
                <Button block success>success</Button>
            </li>
            <li>
                <Button block info>info</Button>
            </li>
            <li>
                <Button block warning>warning</Button>
            </li>
            <li>
                <Button block danger>danger</Button>
            </li>
        </ul>
    ));

