module.exports = {
    entry: "./index.js",
    output: {
        filename: "sanitize-webpack.js",
        // export itself to a global var
        libraryTarget: "var",
        // name of the global var: "Foo"
        library: "Sanitize"
    }
}