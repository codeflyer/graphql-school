var path = require('path');
module.exports = {
  entry: './client/app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js'
  }
};