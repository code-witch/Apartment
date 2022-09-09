const router = require('express').Router();


router.get('/', (req, res) => {
    res.json({
        status: res.statusCode,
        message:'The VolVox API',
        version: process.env.VERSION,
        github: 'https://github.com/code-witch/volvox',
    });
});

module.exports = router;