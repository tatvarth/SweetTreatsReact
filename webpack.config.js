module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main:'app/components/Main.jsx',
      Nav:'app/components/Nav.jsx',
      Menu:'app/components/Menu.jsx',
      Gallery:'app/components/Gallery.jsx',
      Order:'app/components/Order.jsx',
      About:'app/components/About.jsx',
      Testimonials:'app/components/Testimonials.jsx',
      Contact:'app/components/Contact.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
