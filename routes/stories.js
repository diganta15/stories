const express = require('express');

const {ensureAuth} = require('../middleware/auth');
const Story = require('../models/Story');

const router = express.Router();

//@desec Show add page
//@route GET /stories/add
router.get('/add',ensureAuth,(req,res)=>{
    res.render('stories/add')
});

module.exports = router;
