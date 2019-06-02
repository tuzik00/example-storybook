import React from 'react';
import {storiesOf} from '@storybook/react';
import {boolean} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';

import ExampleFormDecorator from '../storiesDecorators/ExampleFormDecorator';

import {
    Checkbox,
    ToggleSwitch,
    Input,
    Select,
    Label,
} from '../../src';


storiesOf('Форма', module)
    .add('Checkbox', () => (
        <Checkbox
            active={boolean('Active', false)}
            disabled={boolean('Disabled', false)}
            onToggle={action('Checkbox-toggle')}
        />
    ))
    .add('Label', () => (
        <ul class="story-list">
            <li>
                <Label text="Label">
                    <Input />
                </Label>
            </li>
            <li>
                <Label required text="Required">
                    <Input />
                </Label>
            </li>
            <li>
                <Label error text="Error">
                    <Input />
                </Label>
            </li>
        </ul>
    ))
    .add('Input', () => (
        <Input
            type="text"
            onClick={action('Input click')}
            onFocus={action('Input focus')}
            onBlur={action('Input blur')}
            onChange={action('Input change')}
            placeholder="email"
            disabled={boolean('Disabled', false)}
        />
    ))
    .add('Select', () => (
        <Select
            dataArray={[
                {value: 'Option 1', name: 'Option 1'},
                {value: 'Option 2', name: 'Option 2'},
                {value: 'Option 3', name: 'Option 3'}
            ]}
            onChange={action('Change select')}
        />
    ))
    .add('ToggleSwitch', () => (
        <ToggleSwitch
            active={boolean('Active', false)}
            disabled={boolean('Disabled', false)}
            onToggle={action('Checkbox-toggle')}
        />
    ))
    .add('Пример формы', () => <ExampleFormDecorator />);
