module.exports = (async () => {
    return {
        transformer: {
            unstable_allowRequireContext: true, // docs needs this
        },
    };
})();
