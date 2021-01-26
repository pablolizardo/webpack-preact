const path = require('path')

module.exports = {
    entry :  path.join(__dirname,"src" ,"index.js"),
    output : {
        path: path.join(__dirname,"public"),
        filename: 'app.js'
    },
    module : {
        rules : [
            {
                test: /\.js$/,
                loader : "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                    }
        ]
    },
    
    devServer : {
        contentBase : path.join(__dirname, "public"),
        watchContentBase : true,
        port: 4242,
        open:true
    }

}
