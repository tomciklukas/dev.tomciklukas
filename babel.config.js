module.exports = (api) => {
    api.cache(true);

    const plugins = [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-transform-react-display-name",
    ];
    const presets = [
        "@babel/preset-env",
        "@babel/preset-react",
    ];

    return {
        plugins,
        presets,
    };
};
