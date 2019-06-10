import React from 'react';
import {storiesOf} from '@storybook/react';
import {select, boolean} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';

import {IconButton} from '../../src';


storiesOf('Логотип', module)
    .add('Основной', () => (
        <IconButton
            name={'Logo'}
            bold={boolean('bold', true)}
            primary
            size={select('size', ['small', 'normal', 'large'], 'large')}
            position={select('position', ['left', 'right'], 'left')}
        >
            Cross-Posting
        </IconButton>
    ));
