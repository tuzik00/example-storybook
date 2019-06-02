import React from 'react';
import {storiesOf} from '@storybook/react';

import ModalWithContentDecorator from '../storiesDecorators/ModalWithContentDecorator';

import {
    Modal,
} from '../../src';


storiesOf('Окна', module)
    .add('Модальное окно', () => <ModalWithContentDecorator/>);
