// @flow

import React from 'react';
import {storiesOf, setAddon} from '@storybook/react';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {action} from '@storybook/addon-actions';

import Checkbox from '../src/components/Checkbox';
import Input from '../src/components/Input';
import Select from '../src/components/Select';
import Label from '../src/components/Label';
import Container from '../src/components/Container';
import {Row, Column} from '../src/components/Grid';


storiesOf('Элементы форм', module)
    .addDecorator(withKnobs)
    .add('Checkbox', withInfo()((): React.Element<'Checkbox'> => (
        <Container>
            <Row>
                <Column>
                    <Checkbox
                        active={boolean('Active', false)}
                        disabled={boolean('Disabled', false)}
                        onToggle={action('Checkbox-toggle')}
                    />
                </Column>
            </Row>
        </Container>
    )))
    .add('Label', withInfo()((): React.Element<'Checkbox'> => (
        <Container>
            <Row>
                <Column>
                    <Label required text="Label">
                        <Input
                            type="text"
                            onClick={action('Input click')}
                            onFocus={action('Input focus')}
                            onBlur={action('Input blur')}
                            onChange={action('Input change')}
                            placeholder="email"
                            disabled={boolean('Disabled', false)}
                        />
                    </Label>
                </Column>
                <Column></Column>
                <Column></Column>
            </Row>
            <Row>
                <Column>
                    <Label error text="Label">
                        <Checkbox
                            active={boolean('Active', false)}
                            disabled={boolean('Disabled', false)}
                            onToggle={action('Checkbox-toggle')}
                        />
                    </Label>
                </Column>
                <Column></Column>
                <Column></Column>
            </Row>
        </Container>
    )))
    .add('Input', withInfo()((): React.Element<'Input'> => (
        <Container>
            <Row>
                <Column>
                    <Input
                        type="text"
                        onClick={action('Input click')}
                        onFocus={action('Input focus')}
                        onBlur={action('Input blur')}
                        onChange={action('Input change')}
                        placeholder="email"
                        disabled={boolean('Disabled', false)}
                    />
                </Column>
                <Column></Column>
                <Column></Column>
            </Row>
        </Container>
    )))
    .add('Select', withInfo()((): React.Element<'select'> => (
        <Container>
            <Row>
                <Column>
                    <Select
                        dataArray={[
                            {value: 'Option 1', name: 'Option 1'},
                            {value: 'Option 2', name: 'Option 2'},
                            {value: 'Option 3', name: 'Option 3'}
                        ]}
                        onChange={action('Change select')}
                    />
                </Column>
                <Column></Column>
                <Column></Column>
            </Row>
        </Container>
    )));
