import React, {Component} from 'react';
import PropTypes from 'prop-types';


class InstallPWA extends Component {
    static propTypes = {
        onSuccess: PropTypes.func,
        onFail: PropTypes.func,
        children: PropTypes.func,
    };

    static defaultProps = {
        children: () => {
        },
        onSuccess: () => {
        },
        onFail: () => {
        },
    };

    static deferredPrompt = null;

    constructor(props) {
        super(props);

        this.state = {
            hasDeferredPrompt: !!InstallPWA.deferredPrompt,
        };
    }

    componentDidMount() {
        window.addEventListener('beforeinstallprompt', this.setDeferredPrompt);

    }

    componentWillUnmount() {
        window.removeEventListener('beforeinstallprompt', this.setDeferredPrompt);
    }

    setDeferredPrompt = (e) => {
        if (e) {
            e.preventDefault();
        }
        console.log(e);
        this.setState({
            hasDeferredPrompt: !!e,
        }, () => {
            InstallPWA.deferredPrompt = e;
        });
    };

    handleInstallPWA = () => {
        if (!InstallPWA.deferredPrompt) {
            return;
        }

        InstallPWA.deferredPrompt.prompt();

        InstallPWA.deferredPrompt.userChoice
            .then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    this.props.onSuccess();
                } else {
                    this.props.onFail();
                }

                this.setDeferredPrompt(null);
            });
    };

    render() {
        const {
            children,
        } = this.props;

        const {
            hasDeferredPrompt,
        } = this.state;

        return hasDeferredPrompt
            ? children(this.handleInstallPWA)
            : null;
    }
}


export default InstallPWA;