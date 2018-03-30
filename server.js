const fs = require('fs')
const webpack = require('webpack')
const { createServer } = require('http')
const config = require('./webpack.config')
const makeDevMiddleware = require('webpack-dev-middleware')

const compiler = webpack(config)

const port = process.env.PORT || 3000

const devMiddleware = makeDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: 'minimal',
})


const handlerServer = (req, res) => {
  devMiddleware(req, res, () => {
    res.setHeader('Content-Type', 'text/html')
    const template = fs.readFileSync('src/index.html', 'utf8')
    res.end(template)
  })
}

createServer(handlerServer).listen(port, () => {
  process.stdout.write(`Dev server listening on port ${port}...\n`)
})
