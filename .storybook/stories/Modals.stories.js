import React from 'react';
import {storiesOf} from '@storybook/react';

import Modal from '../../src/components/Modal';
import ModalWithContentDecorator from '../storiesDecorators/ModalWithContentDecorator';


storiesOf('Окна', module)
    .add('Модальное окно', () => <ModalWithContentDecorator/>);
