const express = require('express');
const passport = require('passport');

const router = express.Router();

// @desec Authenticate with google
// @route GET /google
router.get('/google', passport.authenticate('google',{
    scope: ['profile']
}));

// @desec Google auth callback
// @route GET /auth/googel/callback
router.get('/google/callback',passport.authenticate('google',{
    failureRedirect:'/'
}),(req,res)=>{
    res.redirect('/dashboard');
})

// @desc Logout user
// @route GET /auth/logout
router.get('/logout',(req,res)=>{
    req.logout();
    res.redirect('/');
})
module.exports = router;