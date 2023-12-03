const express = require('express')
const router = express.Router();
const user = require("./user");
const {body , validationResult } =require('express-validator');

router.post('',
body('email',"not valide mail").isEmail()
,async (req,res)=>{
    const error= validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({errors:error.array()})
    }
    try {
        await user.create({
            email:req.body.email,
        })
        res.json({success:true});
    } catch (err) {
        console.log(err)
        res.json({success:false})
    }
})

module.exports = router;