import React from 'react';
import {storiesOf} from '@storybook/react';

import Card from '../../src/components/Card';
import {Header, Body, Footer} from '../../src/components/Layout';
import CardDecorator from '../storiesDecorators/CardDecorator';
import Heading from '../../src/components/Heading';
import Content from '../../src/components/Content';
import Button from '../../src/components/Button';
import Position from '../../src/components/Position';
import Img from '../../src/components/Img';


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
