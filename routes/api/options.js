const express = require('express');

const router = express.Router({mergeParams: true});
const optionsApi = require('../../controllers/api/options_api');

router.post('/create', optionsApi.createOptions);
router.get('/:id/delete', optionsApi.delete);
router.get('/:id/add_vote', optionsApi.addVote)

module.exports = router;