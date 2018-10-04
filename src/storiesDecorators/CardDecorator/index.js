// @flow

import React from 'react';

import './CardDecorator.styl';


const CardDecorator = (storyFn: func): React.Element<'div'> => (
    <div className="card-decorator">
        {storyFn()}
    </div>
);


export default CardDecorator;
