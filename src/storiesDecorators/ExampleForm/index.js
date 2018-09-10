// @flow

import React, {Component} from 'react'

import Checkbox from '../../components/Checkbox';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';
import Row from '../../components/Row';
import Column from '../../components/Column';
import Label from '../../components/Label';
import Container from '../../components/Container';


class ExampleForm extends Component {
    render(): React.Element<'div'> {
        return (
            <Container>
                <Row>
                    <Column>
                        <Label>Имя:</Label>
                        <Input type="text"/>
                    </Column>
                    <Column>
                        <Label>Почта:</Label>
                        <Input type="email"/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Label>Страна:</Label>
                        <Select/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Label>Нажми:</Label>
                        <Checkbox/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Button
                            block
                            primary
                        >
                            Отправить
                        </Button>
                    </Column>
                </Row>
            </Container>
        )
    }
}


export default ExampleForm;
