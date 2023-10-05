const express = require('express');

const router = express.Router();
const questionsApi = require('../../controllers/api/questions_api');

router.post('/create', questionsApi.create);
router.use('/:id/options', require('./options'));
router.get('/:id/delete', questionsApi.delete);

module.exports = router;