import React from 'react';
import _ from 'lodash';
import {storiesOf} from '@storybook/react';
import {boolean, number, select, array} from '@storybook/addon-knobs';

import {
    Row,
    Col,
    Grid,
    Position,
} from '../../src';


storiesOf('Сетка', module)
    .add('Пример', () => {
        const grid = array('grid size', [3, 3]);

        return (
            <Grid fluid={boolean('Grid fluid', true)}>
                {_.range(grid[0]).map((row) => (
                    <Row
                         start={select('Row start', ['', 'xs', 'md', 'lg'], '')}
                         center={select('Row  center', ['', 'xs', 'md', 'lg'], '')}
                         end={select('Row end', ['', 'xs', 'md', 'lg'], '')}
                         around={select('Row around', ['', 'xs', 'md', 'lg'], '')}
                         between={select('Row between', ['', 'xs', 'md', 'lg'], '')}
                    >
                        {_.range(grid[1]).map((column) => (
                            <Col
                                xs={number('Col xs', 6)}
                                md={number('Col md', 4)}
                                lg={number('Col lg', 3)}
                                xsOffset={number('Col xsOffset', 0)}
                                mdOffset={number('Col mdOffset', 0)}
                                lgOffset={number('Col lgOffset', 0)}
                            >
                               <Position center>
                                    Column-{row}-{column}
                               </Position>
                            </Col>
                        ))}
                    </Row>
                ))}
            </Grid>
        );
    });
