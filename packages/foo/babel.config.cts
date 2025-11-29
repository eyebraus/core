module.exports = {
    plugins: [
        [
            'module-resolver',
            {
                alias: {
                    '^@eyebraus/(.+)': '../\\1/src/index.ts',
                },
            },
        ],
        ['@babel/plugin-proposal-decorators', { version: 'legacy' }],
        'babel-plugin-parameter-decorator',
        '@babel/plugin-transform-class-properties',
    ],
    presets: [['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-typescript'],
};
