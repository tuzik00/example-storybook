// @flow

import React from 'react';
import {storiesOf, setAddon} from '@storybook/react';
import {withKnobs, boolean, number} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';

import ModalWithContent from '../src/storiesDecorators/ModalWithContent';


storiesOf('Окна', module)
    .addDecorator(withKnobs)
    .add('Модальное окно', withInfo()((): React.Element<'Container'> => (
        <ModalWithContent/>
    )));
