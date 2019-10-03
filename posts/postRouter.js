const express = 'express';
const db = require('./postDb');

const router = express.Router();

router.get('/', (req, res) => {
    db.find()
        .then(post => res.status(200).json(posts))
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "the post information could not be retrieved." })
        })
});

router.get('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

// custom middleware

function validatePostId(req, res, next) {

};

module.exports = router;