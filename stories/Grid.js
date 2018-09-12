// @flow

import React from 'react';
import {storiesOf, setAddon} from '@storybook/react';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';

import GridItem from '../src/storiesDecorators/GridItem';

import Row from '../src/components/Row';
import Column from '../src/components/Column';
import Container from '../src/components/Container';


const grid = [
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3],
    [1, 2],
    [1],
];

storiesOf('Сетка', module)
    .addDecorator(withKnobs)
    .add('Пример', withInfo()((): React.Element<'Container'> => (
        <Container>
            {grid.map((row: number): React.Element<'Row'> => (
                <Row>
                    {row.map((column: number): React.Element<'Column'> => (
                        <Column flex={column}>
                            <GridItem>Column-{column}</GridItem>
                        </Column>
                    ))}
                </Row>
            ))}
        </Container>
    )));
