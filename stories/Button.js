import React from 'react';
import {storiesOf, setAddon} from '@storybook/react';
import {boolean} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';

import Button from '../src/components/Button';


storiesOf('Кнопки', module)
    .add('Базовая', () => (
        <Button
            onClick={action('Button click')}
            disabled={boolean('Disabled', false)}
        >
            button
        </Button>
    ));
