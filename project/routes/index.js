const express = require('express');
const router = express.Router();
router.get('/', (req, res)=>{
    res.render("index");
});
router.get('/hola', (req, res)=>{
    res.send("El endpoitn /hola");
})
module.exports = router;