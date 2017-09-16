const router = require('express').Router();

const foo = require('./foo');

router.get('/', (req, res) => {
  res.status(200).send('blah');
});

router.use('/foo', foo);

module.exports = router;