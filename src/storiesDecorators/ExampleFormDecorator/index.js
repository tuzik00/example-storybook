// @flow

import React from 'react';

import Checkbox from '../../components/Checkbox';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';
import Column from '../../components/Grid/Column';
import Row from '../../components/Grid/Row';
import Label from '../../components/Label';
import Container from '../../components/Container';
import Position from '../../components/Position';


const country = [
    {name: 'Москва', value: 'moscow'},
    {name: 'Санкт-Петербург', value: 'st.petersburg'}
];


const ExampleFormDecorator = (): React.Element<'div'> => (
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
                    />
                </Label>
            </Column>
        </Row>
        <Row>
            <Column>
                <Label text="Страна">
                    <Select dataArray={country} />
                </Label>
            </Column>
        </Row>
        <Row>
            <Column>
                <Label text="Нажми">
                    <Checkbox />
                </Label>
            </Column>
        </Row>
        <Row>
            <Column>
                <Position right>
                    <Button primary>
                        Отправить
                    </Button>
                </Position>
            </Column>
        </Row>
    </Container>
);


export default ExampleFormDecorator;
