'use strict'
const fs = require('fs')
const path = require('path')

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
// const video = fs.readdirSync(path.join(__dirname, '../public/videos')).pop()
//     return reply.redirect(`https://localhost/video/${video.replace('.mp4','')}`)
return reply.sendFile('index.html')
    
  })
}
