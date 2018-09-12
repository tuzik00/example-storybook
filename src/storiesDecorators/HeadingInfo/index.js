// @flow

import React, { Component, Fragment, cloneElement } from 'react';


type HeadingItemPropsType = {
    children?: React.Node
};

class HeadingItem extends Component<HeadingItemPropsType> {
    componentDidMount(){
        console.log(this.props)
    };

    render (): React.Element<'div'> {
        const { children } = this.props;

        return (
            <div>
                <div>{children}</div>
                <div>
                    fontSize: 72px
                </div>
                <div>
                    lineHeight: 80px
                </div>
                <div>
                    fontWeight: 700
                </div>
                <div>
                    mixin: heading
                </div>
            </div>
        );
    }
}

type HeadingInfoPropsType = {
    children: React.Node
};

const HeadingInfo = (props: HeadingInfoPropsType): React.Element<'div'> => {
    return (
        <Fragment>
            {props.children.map((child: Ract.Node): React.Element<'HeadingItem'> => (
                <HeadingItem {...child.props}>{cloneElement(child)}</HeadingItem>
            ))}
        </Fragment>
    );
};

export default HeadingInfo;