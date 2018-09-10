// @flow

import React from 'react';
import {storiesOf, setAddon} from '@storybook/react';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';

import GridItem from '../src/storiesDecorators/GridItem';

import Row from '../src/components/Row';
import Column from '../src/components/Column';
import Container from '../src/components/Container';


storiesOf('Сетка', module)
    .addDecorator(withKnobs)
    .add('Пример', withInfo()((): React.Element<'Container'> => (
        <Container>
            <Row>
                <Column flex={1}>
                    <GridItem>Column 1</GridItem>
                </Column>
                <Column flex={2}>
                    <GridItem>Column 2</GridItem>
                </Column>
                <Column flex={3}>
                    <GridItem>Column 3</GridItem>
                </Column>
                <Column flex={4}>
                    <GridItem>Column 4</GridItem>
                </Column>
                <Column flex={5}>
                    <GridItem>Column 5</GridItem>
                </Column>
                <Column flex={6}>
                    <GridItem>Column 6</GridItem>
                </Column>
                <Column flex={7}>
                    <GridItem>Column 7</GridItem>
                </Column>
                <Column flex={8}>
                    <GridItem>Column 8</GridItem>
                </Column>
                <Column flex={9}>
                    <GridItem>Column 9</GridItem>
                </Column>
                <Column flex={10}>
                    <GridItem>Column 10</GridItem>
                </Column>
                <Column flex={11}>
                    <GridItem>Column 11</GridItem>
                </Column>
                <Column flex={12}>
                    <GridItem>Column 12</GridItem>
                </Column>
            </Row>
            <Row>
                <Column flex={1}>
                    <GridItem>Column 1</GridItem>
                </Column>
                <Column flex={2}>
                    <GridItem>Column 2</GridItem>
                </Column>
                <Column flex={3}>
                    <GridItem>Column 3</GridItem>
                </Column>
                <Column flex={4}>
                    <GridItem>Column 4</GridItem>
                </Column>
                <Column flex={5}>
                    <GridItem>Column 5</GridItem>
                </Column>
                <Column flex={6}>
                    <GridItem>Column 6</GridItem>
                </Column>
            </Row>
            <Row>
                <Column flex={1}>
                    <GridItem>Column 1</GridItem>
                </Column>
                <Column flex={2}>
                    <GridItem>Column 2</GridItem>
                </Column>
                <Column flex={3}>
                    <GridItem>Column 3</GridItem>
                </Column>
            </Row>
            <Row>
                <Column flex={1}>
                    <GridItem>Column 1</GridItem>
                </Column>
                <Column flex={2}>
                    <GridItem>Column 2</GridItem>
                </Column>
            </Row>
            <Row>
                <Column flex={1}>
                    <GridItem>Column 1</GridItem>
                </Column>
            </Row>
        </Container>
    )));
