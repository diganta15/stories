const express = require('express');

const router = express.Router();

// @desec Login/Landing Page
// @route GET/
router.get('/',(req,res)=>{
    res.render('login',{
        layout:'login'
    }); 
});

// @desec Login
// @route GET/dashboard
router.get('/dashboard',(req,res)=>{
    res.render('dashboard');
})

module.exports= router;