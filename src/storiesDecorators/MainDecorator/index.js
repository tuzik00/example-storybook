// @flow

import React from 'react';

import './MainDecorator.styl';


const MainDecorator = (storyFn: func): React.Element<'div'> => (
    <div className="main-decorator">
        {storyFn()}
    </div>
);


export default MainDecorator;
