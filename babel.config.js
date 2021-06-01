module.exports = function (api) {
    api.cache(true);

    const presets = [
        ['@babel/preset-env', {
            modules: false,
            targets: {
                browsers: ['defaults']
            },
            useBuiltIns: 'usage',
            corejs: 3
        }],
        '@babel/preset-react'
    ];

    const plugins = [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-transform-async-to-generator',
        '@babel/plugin-transform-modules-commonjs',
        [
            'babel-plugin-styled-components',
            {
                displayName: true,
                fileName: false
            }
        ],
        '@babel/plugin-syntax-dynamic-import'
    ];

    return {
        presets,
        plugins
    };
};
