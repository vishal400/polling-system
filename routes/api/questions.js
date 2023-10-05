const express = require('express');

const router = express.Router();
const questionApi = require('../../controllers/api/questions_api');

router.post('/create', questionApi.create);
router.use('/:id/options', require('./options'));

module.exports = router;