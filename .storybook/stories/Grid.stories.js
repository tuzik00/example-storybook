import React from 'react';
import {storiesOf} from '@storybook/react';

import GridItemDecorator from '../storiesDecorators/GridItemDecorator';

import {
    Row,
    Column,
} from '../../src';


storiesOf('Сетка', module)
    .add('Пример', () => {
        const grid = [
            [1, 2, 3, 4, 5, 6],
            [1, 2, 3],
            [1, 2],
            [1]
        ];

        return (
            <div>
                {grid.map((row) => (
                    <Row>
                        {row.map((column) => (
                            <Column flex={column}>
                                <GridItemDecorator>
                                    Column-{column}
                                </GridItemDecorator>
                            </Column>
                        ))}
                    </Row>
                ))}
            </div>
        );
    });
