import React from 'react';
import {storiesOf} from '@storybook/react';

import CardDecorator from '../storiesDecorators/CardDecorator';

import {
    Card,
    Header,
    Body,
    Footer,
    Heading,
    Content,
    Button,
    Position,
    Img,
} from '../../src';


storiesOf('Карточки', module)
    .addDecorator(CardDecorator)
    .add('Базовая карточка', () => (
        <Card>
            <Header>
                Title
            </Header>
            <Body>
                Body
            </Body>
            <Footer>
                Footer
            </Footer>
        </Card>
    ))
    .add('Карточка с текстом', () => (
        <Card>
            <Header>
                <Heading type="3">Title</Heading>
            </Header>
            <Body>
                <Content>
                    Единственное оригинальное строение, сохранившееся до наших дней,
                    — дом последнего русского коменданта Ротчева — объявлено объектом
                    исторической ценности национального значения.
                </Content>
            </Body>
            <Footer>
                <Position right>
                    <Button primary>
                        Button
                    </Button>
                </Position>
            </Footer>
        </Card>
    ))
    .add('Карточка с картинкой', () => (
        <Card>
            <Img src="https://dummyimage.com/300x200/CCC/000" alt=""/>
            <Body>
                <Content>
                    Единственное оригинальное строение, сохранившееся до наших дней,
                    — дом последнего русского коменданта Ротчева — объявлено объектом
                    исторической ценности национального значения.
                </Content>
            </Body>
            <Footer>
                <Position right>
                    <Button primary>
                        Открыть
                    </Button>
                </Position>
            </Footer>
        </Card>
    ));
