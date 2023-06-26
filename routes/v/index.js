const fs = require('fs');
const path = require('path');

module.exports = async function (fastify, opts) {
  fastify.get('/:name', async function (request, reply) {
    const fileName = request.params.name;
    const filePath = path.join(__dirname, '..','..', 'public', 'videos', `${fileName}.mp4`);
    console.log(filePath)

    try {
      await fs.promises.access(filePath, fs.constants.F_OK);
      return reply.sendFile('video.html');
    } catch (error) {
      return reply.sendFile('refresh.html');
    }
  });
};
