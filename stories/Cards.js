// @flow

import React from 'react';
import {storiesOf} from '@storybook/react';

import Card from '../src/components/Card';
import { Header, Body, Footer } from '../src/components/Layout';
import Container from '../src/components/Container';
import {Row, Column} from '../src/components/Grid';
import Button from '../src/components/Button';
import { Right } from '../src/components/Position';
import Heading from '../src/components/Heading';
import Content from '../src/components/Content';


storiesOf('Карточки', module)
    .add('Карточка', (): React.Element<'Button'> => (
        <Container>
            <div style={{width: 300}}>
                <Card>
                    <Header>
                        <Heading type="3">
                            Title
                        </Heading>
                    </Header>
                    <Body>
                        <Content>
                            Some quick example text to build on the
                            card title and make up the bulk of the
                            card's content.
                        </Content>
                        <Content>
                            Some quick example text to build on the
                            card title and make up the bulk of the
                            card's content.
                        </Content>
                    </Body>
                    <Footer>
                        <Right>
                            <Button primary>Открыть</Button>
                        </Right>
                    </Footer>
                </Card>
            </div>
        </Container>
    ));
