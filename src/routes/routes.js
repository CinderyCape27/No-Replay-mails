// Routes settings
const express = require('express');
const router =  express.Router();

router.post('/send-mail', (req, res) => {
    res.send('Hello');
});




module.exports = router;