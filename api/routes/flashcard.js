const router = require('express').Router();


router.get('/', (req, res) => {
    res.send('flashcard');
});

module.exports = router;