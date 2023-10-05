const express = require('express');

const router = express.Router({mergeParams: true});
const optionsApi = require('../../controllers/api/options_api');

router.post('/create', optionsApi.createOptions);

module.exports = router;