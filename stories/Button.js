// @flow

import React from 'react';
import {storiesOf, setAddon} from '@storybook/react';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {action} from '@storybook/addon-actions';

import Button from '../src/components/Button';


storiesOf('Кнопки', module)
    .addDecorator(withKnobs)
    .add('default', withInfo()((): React.Element<'Button'> => (
        <ul>
            <li>
                <Button small>small</Button>
                <Button>normal</Button>
                <Button large>large</Button>
                <Button big>big</Button>
            </li>
            <li>
                <Button>default</Button>
                <Button primary>primary</Button>
                <Button success>success</Button>
                <Button info>info</Button>
                <Button warning>warning</Button>
                <Button danger>danger</Button>
            </li>
        </ul>
    )));
