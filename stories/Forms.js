// @flow

import React from 'react';
import {storiesOf, setAddon} from '@storybook/react';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {action} from '@storybook/addon-actions';

import Checkbox from '../src/components/Checkbox';


storiesOf('Элементы форм', module)
    .addDecorator(withKnobs)
    .add('Checkbox', withInfo()((): React.Element<'Checkbox'> => (
        <Checkbox
            active={boolean('Active', false)}
            disabled={boolean('Disabled', false)}
            onToggle={action('Checkbox-toggle')}
        />
    )));
