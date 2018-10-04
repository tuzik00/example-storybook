import React from 'react';
import {storiesOf} from '@storybook/react';

import GridItemDecorator from '../src/storiesDecorators/GridItemDecorator';
import Row from '../src/components/Grid/Row';
import Column from '../src/components/Grid/Column';


storiesOf('Сетка', module)
    .addWithDoc('Пример', Column, null, () => {
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
