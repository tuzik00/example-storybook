import React from 'react';

import {
    Checkbox,
    Input,
    Select,
    Button,
    Column,
    Row,
    Label,
    Container,
    Position,
} from '../../../src';


const country = [
    {name: 'Москва', value: 'moscow'},
    {name: 'Санкт-Петербург', value: 'st.petersburg'}
];


const ExampleFormDecorator = () => (
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
                    <Select dataArray={country}/>
                </Label>
            </Column>
        </Row>
        <Row>
            <Column>
                <Label text="Нажми">
                    <Checkbox/>
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
