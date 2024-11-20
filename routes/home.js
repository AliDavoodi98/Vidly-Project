const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: "page1", message: "Hello" });
});

module.exports = router;
