// @flow

import React from 'react';
import {storiesOf, setAddon} from '@storybook/react';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {action} from '@storybook/addon-actions';

import Checkbox from '../src/components/Checkbox';
import Input from '../src/components/Input';
import Select, { Option } from '../src/components/Select';


storiesOf('Элементы форм', module)
    .addDecorator(withKnobs)
    .add('Checkbox', withInfo()((): React.Element<'Checkbox'> => (
        <Checkbox
            active={boolean('Active', false)}
            disabled={boolean('Disabled', false)}
            onToggle={action('Checkbox-toggle')}
        />
    )))
    .add('Input', withInfo()((): React.Element<'Input'> => (
        <Input
            onClick={action('Input click')}
            onFocus={action('Input focus')}
            onBlur={action('Input blur')}
            onChange={action('Input change')}
            placeholder="email"
            disabled={boolean('Disabled', false)}
        />
    )))
    .add('Select', withInfo()((): React.Element<'select'> => (
        <Select
            dataArray={[
                {value: 'Option 1', name: 'Option 1'},
                {value: 'Option 2', name: 'Option 2'},
                {value: 'Option 3', name: 'Option 3'}
            ]}
            onChange={action('Change select')}
        />
    )));
