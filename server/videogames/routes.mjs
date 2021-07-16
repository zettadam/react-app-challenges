const data = [
  { id: '1', title: 'Witcher 2' },
  { id: '2', title: 'Witcher 3, The Wild Hund' },
  { id: '3', title: 'Call of Duty, Modern Warfare' },
  { id: '4', title: 'Red Dead Redemption 1'},
  { id: '5', title: 'Red Dead Redemption 2'}
]

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const getAllGames = async (req, res) => {
  await sleep(Math.random() * 5000)
  await res.send(data)
}

const getGame = async (req, res) => {
  const game = data.find(d => d.id === req.params.id)
  await sleep(Math.random() * 5000)
  await res.send(game || {})
}

const findGames = async (req, res) => {
  const q = req.params.query
  const games = data.filter(d => d.title && d.title.includes(q))
  await sleep(Math.random() * 5000)
  await res.send(games || {})
}


const routes = (app, opts, done) => {
  app.get('/find/:query', findGames)
  app.get('/:id', getGame)
  app.get('/', getAllGames)

  done()
}

export default routes