// @flow

import React from 'react';
import {storiesOf, setAddon} from '@storybook/react';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {action} from '@storybook/addon-actions';

import Container from '../src/components/Container';
import Button from '../src/components/Button';


storiesOf('Кнопки', module)
    .addDecorator(withKnobs)
    .add('Базовая', withInfo()((): React.Element<'Button'> => (
        <Container>
            <Button
                onClick={action('Button click')}
                disabled={boolean('Disabled', false)}
            >
                button
            </Button>
        </Container>
    )))
    .add('Размеры', withInfo()((): React.Element<'Button'> => (
        <Container>
            <ul className="example-list">
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
        </Container>
    )))
    .add('Широкие', withInfo()((): React.Element<'Button'> => (
        <Container>
            <ul className="example-list">
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
                    <Button block danger>danger</Button>
                </li>
                <li>
                    <Button block warning>warning</Button>
                </li>
            </ul>
        </Container>
    )))
    .add('Цвета', withInfo()((): React.Element<'Button'> => (
        <Container>
            <ul className="example-list">
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
                    <Button danger>danger</Button>
                </li>
                <li>
                    <Button warning>warning</Button>
                </li>
            </ul>
        </Container>
    )));
