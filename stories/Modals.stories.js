import React from 'react';
import {storiesOf} from '@storybook/react';

import Modal from '../src/components/Modal';
import ModalWithContentDecorator from '../src/storiesDecorators/ModalWithContentDecorator';


storiesOf('Окна', module)
    .addWithDoc('Модальное окно', Modal, null, () => <ModalWithContentDecorator/>);
