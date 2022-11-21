module.exports = (async () => {
    return {
        transformer: {
            unstable_allowRequireContext: true, // Biblo needs this
        },
    };
})();
