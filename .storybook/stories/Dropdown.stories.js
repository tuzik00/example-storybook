import React from 'react';
import {storiesOf} from '@storybook/react';

import {
    Dropdown,
} from '../../src';


storiesOf('Выподашки', module)
    .add('Dropdown', () => (
        <ul>
            <Dropdown
                content={
                    <ul>
                        <li>content</li>
                        <li>content</li>
                        <li>content</li>
                        <li>content</li>
                        <li>content</li>
                    </ul>
                }
            >
                <li>
                    list item 1
                </li>
            </Dropdown>
            <li>
                list item 1
            </li>
            <li>
                list item 1
            </li>
            <li>
                list item 1
            </li>
            <li>
                list item 1
            </li>
        </ul>
    ));
