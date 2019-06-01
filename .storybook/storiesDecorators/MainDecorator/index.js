import React from 'react';

import './MainDecorator.styl';


const MainDecorator = (storyFn) => (
    <div className="main-decorator">
        {storyFn()}
    </div>
);


export default MainDecorator;
