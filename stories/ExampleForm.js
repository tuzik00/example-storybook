// @flow

import React from 'react';
import {storiesOf, setAddon} from '@storybook/react';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {action} from '@storybook/addon-actions';

import Checkbox from '../src/components/Checkbox';
import Input from '../src/components/Input';
import Select from '../src/components/Select';
import Button from '../src/components/Button';
import Row from '../src/components/Row';
import Column from '../src/components/Column';
import Label from '../src/components/Label';
import Container from '../src/components/Container';


const country = [
    {name: 'Москва', value: 'moscow'},
    {name: 'Санкт-Петербург', value: 'st.petersburg'}
];

storiesOf('Форма', module)
    .addDecorator(withKnobs)
    .add('Пример формы', withInfo()((): React.Element<'ExampleForm'> => (
        <Container>
            <Row>
                <Column>
                    <Label
                        required
                        text="Имя"
                    >
                        <Input
                            type="text"
                            placeholder="Введите ваше имя"
                            onChange={action('Change input name')}
                        />
                    </Label>
                </Column>
                <Column>
                    <Label
                        text="Email"
                        required
                    >
                        <Input
                            type="email"
                            placeholder="Введите ваш email"
                            onChange={action('Change input email')}
                        />
                    </Label>
                </Column>
            </Row>
            <Row>
                <Column>
                    <Label text="Страна">
                        <Select
                            dataArray={country}
                            onChange={action('Change select country')}
                        />
                    </Label>
                </Column>
            </Row>
            <Row>
                <Column>
                    <Label text="Нажми">
                        <Checkbox onToggle={action('Toggle "press me" button')}/>
                    </Label>
                </Column>
            </Row>
            <Row>
                <Column>
                    <Button
                        primary
                        onClick={action('Submit form')}
                    >
                        Отправить
                    </Button>
                </Column>
            </Row>
        </Container>
    )));
