const express = require('express');
const router = express.Router();

router.get("/", (req,res)=>{
    res.render ("main",{
        layout:"Frutas",
        frutas:[
            "banana",
            "cebollas",
            "pimenton",
            "papas",
            "lechuga",
            "tomate"
        ]
    })
});


module.exports = router;