const express = require('express');
const router = express.Router();

// @router GET api/profile/test
// @desc  Tests users route
// @access  Public       

router.get('/test', (req, res) => res.json({ msg: 'Profiles Works'}));

module.exports = router;