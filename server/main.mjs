import fastify from 'fastify'
import cors from 'fastify-cors'

import boardgames from './boardgames/routes.mjs'
import videogames from './videogames/routes.mjs'

const app = fastify({})

app.register(cors)

app.register(boardgames, { prefix: '/boardgames' })
app.register(videogames, { prefix: '/videogames' })

app.get('/', async (req, res) => {
  await res.code(200).send({ hello: 'World' })
})


const start = async () => {
  try {
    await app.listen(5000)

    const address = app.server.address()
    const port = typeof address === 'string' ? address : address.port

  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()