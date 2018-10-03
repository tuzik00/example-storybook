// @flow

import React from 'react';

import './GlobalStyleDecorator.styl';


const GlobalStyleDecorator = (storyFn: func): React.Element<'div'> => storyFn();


export default GlobalStyleDecorator;
