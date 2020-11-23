module.exports = {
  mode: "development",
  
  module: {
    rules: [
      {
        test: /\.(png||jpg||jpeg||ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name]-[sha1:hash:3].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(ttf||otf||woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  }
}