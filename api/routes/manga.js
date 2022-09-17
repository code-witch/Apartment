const router = require('express').Router();
const mangaController = require('../controllers/mangaController');


router.use((req, res, next) => {
    if (false) { // implement check for logged in user? or apikey? apikey per user?
        res.redirect(403,'/api');
        return;
    }
    next();
});

router.get('/', (req, res) => {
    res.send('manga');
});

router.get('/:apikey', (req, res) => {
    let library = mangaController.getAllLibraiesByUsername(req.params.username);
    res.json(library);
});

module.exports = router;