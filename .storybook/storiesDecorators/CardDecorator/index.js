import React from 'react';

import './CardDecorator.styl';


const CardDecorator = (storyFn) => (
    <div className="card-decorator">
        {storyFn()}
    </div>
);


export default CardDecorator;
