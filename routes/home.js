const { Router } = require('express');

const { getHome } = require('../controllers/home');

const router = new Router();

router.get('/', getHome );

module.exports = router;
