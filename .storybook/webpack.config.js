const webpackConfig = require('react-builder/config/webpack.config');


module.exports = ({ config }) => {
    const webpackDevConfig = webpackConfig('development');

    return {
        ...config,
        module: {
            ...config.module,
            rules: [
                ...webpackDevConfig.module.rules,
            ],
        },
    }
};
