// Generate code for web server.

const express = require('express');
const router = express.Router();

const comments = require('../controllers/comments');

router.get('/comments', comments.getAll);
router.get('/comments/:id', comments.get);
router.post('/comments', comments.create);
router.put('/comments/:id', comments.update);
router.delete('/comments/:id', comments.delete);

module.exports = router;
