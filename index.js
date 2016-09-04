module.exports = {
    presets: [
        require("babel-preset-es2015"), require("babel-preset-stage-3")
    ],
    plugins: [
        require("babel-plugin-transform-async-to-generator")
    ]
};
