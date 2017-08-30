import * as Express from 'express'

let app = Express()
app.use('/', Express.static(__dirname + '/public'))
app.use('/dist', Express.static(__dirname + '/dist'))
app.listen(8080)