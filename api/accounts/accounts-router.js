const router = require('express').Router()
const middleware = require("./accounts-middleware")
const account = require('./accounts-model')

router.get('/', async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const accounts = await account.getAll()
    res.json(accounts)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', middleware.checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  try {

  } catch (err) {
    next(err)
  }
})

router.post('/', middleware.checkAccountPayload, middleware.checkAccountNameUnique, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const accountId = await account.getById(req.params.id)
    res.json(accountId)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', 
    middleware.checkAccountId, 
    middleware.checkAccountPayload, 
    middleware.checkAccountNameUnique, 
    (req, res, next) => {
  // DO YOUR MAGIC
  try {

  } catch (err) {
    next(err)
  }
});

router.delete('/:id', middleware.checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  try {

  } catch (err) {
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({ message: err.message })
})

module.exports = router;
