module.exports = function (api) {
    api.cache(true);
    return {
        plugins: ["@biblo/babel-plugin"],
        presets: ["babel-preset-expo"],
    };
};
