module.exports = {
    entry: "./main.ts",
    output: { 
        filename: "app.js",
        path: __dirname,
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    }
}