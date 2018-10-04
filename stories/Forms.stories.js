import React from 'react';
import {storiesOf} from '@storybook/react';
import {boolean} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';

import ExampleFormDecorator from '../src/storiesDecorators/ExampleFormDecorator';

import Checkbox from '../src/components/Checkbox';
import ToggleSwitch from '../src/components/ToggleSwitch';
import Input from '../src/components/Input';
import Select from '../src/components/Select';
import Label from '../src/components/Label';


storiesOf('Форма', module)
    .addWithDoc('Checkbox', Checkbox, null, () => (
        <Checkbox
            active={boolean('Active', false)}
            disabled={boolean('Disabled', false)}
            onToggle={action('Checkbox-toggle')}
        />
    ))
    .addWithDoc('Label', Label, null, () => (
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
    .addWithDoc('Input', Input, null, () => (
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
    .addWithDoc('Select', Select, null, () => (
        <Select
            dataArray={[
                {value: 'Option 1', name: 'Option 1'},
                {value: 'Option 2', name: 'Option 2'},
                {value: 'Option 3', name: 'Option 3'}
            ]}
            onChange={action('Change select')}
        />
    ))
    .addWithDoc('ToggleSwitch', ToggleSwitch, null, () => (
        <ToggleSwitch
            active={boolean('Active', false)}
            disabled={boolean('Disabled', false)}
            onToggle={action('Checkbox-toggle')}
        />
    ))
    .add('Пример формы', () => <ExampleFormDecorator />);
