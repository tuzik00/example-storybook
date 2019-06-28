import React, {Component} from 'react';
import _ from 'lodash';
import cn from 'classnames';
import PropTypes from 'prop-types';

import './Img.styl';


class Img extends Component {
    static propTypes = {
        asImage: PropTypes.bool,
        src: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.string
        ]).isRequired,
        alt: PropTypes.string,
        className: PropTypes.string,
        onLoadError: PropTypes.func,
        style: PropTypes.object,
        isRounded: PropTypes.bool,
    };

    static defaultProps = {
        asImage: true,
        src: [],
        alt: '',
        onLoadError: () => {},
    };

    constructor(props) {
        super(props);

        const srcArray = this.getImagesSrcArray(props);

        this.state = {
            isError: false,
            srcArray,
            srcIndex: 0,
            src: _.head(srcArray),
            isValidImage: false,
        };
    }

    componentDidUpdate(prevProps) {
        if (!_.isEqual(prevProps.src, this.props.src)) {
            const srcArray = this.getImagesSrcArray(this.props);

            this.setState({
                srcArray,
                srcIndex: 0,
                src: _.head(srcArray),
                isValidImage: false,
            });
        }
    }

    getImagesSrcArray(props = this.props) {
        const {src = []} = props;

        if (_.isObject(src)) {
            return _.map(src);
        }

        if (!_.isArray(src)) {
            return [src];
        }

        return src;
    }

    setNextImage() {
        const {srcArray, srcIndex} = this.state;

        if (srcIndex >= _.size(srcArray) - 1) {
            this.setState({
                isError: true
            }, this.props.onLoadError);

            return;
        }

        const newSrcIndex = srcIndex + 1;

        this.setState({
            srcIndex: newSrcIndex,
            src: _.nth(srcArray, newSrcIndex)
        });
    }

    tryImage() {
        const {
            src,
        } = this.state;

        const img = new Image();

        img.onload = () => this.setState({isValidImage: true});
        img.onerror = () => this.setNextImage();
        img.src = src;

        return null;
    }

    getClassName(){
        const {
            className,
            isRounded
        } = this.props;

        return cn(
            className,
            'Img',
            isRounded && 'Img_rounded'
        )
    }

    renderAsImage() {
        const {
            alt,
            style,
        } = this.props;

        const {
            src,
        } = this.state;

        return (
            <img
                style={style}
                className={this.getClassName()}
                alt={alt}
                src={src}
            />
        );
    }

    renderAsBackground() {
        const {
            style,
        } = this.props;

        const {
            src,
        } = this.state;

        const imgStyle = {
            ...style,
            background: `url(${src}) no-repeat center content-box`,
            backgroundSize: 'contain',
        };

        return (
            <div
                style={imgStyle}
                className={this.getClassName()}
            />
        );
    }

    render() {
        const {
            asImage,
        } = this.props;

        const {
            isValidImage,
            isError,
        } = this.state;

        if (isError) {
            return null;
        }

        if (!isValidImage) {
            return this.tryImage();
        }

        return asImage
            ? this.renderAsImage()
            : this.renderAsBackground();
    }
}


export default Img;
