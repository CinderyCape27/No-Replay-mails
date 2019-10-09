// Routes settings
const express = require('express');
const router =  express.Router();



router.post('/send-email', (req, res) => {
    console.log(req.body);
    res.redirect('/sent.html');
    
});




module.exports = router;