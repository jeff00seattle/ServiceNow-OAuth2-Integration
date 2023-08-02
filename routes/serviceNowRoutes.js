const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/incidents/sample',(req,res)=>{
    console.log(JSON.stringify({req}, null, 2));
    const options={
        url:`https://dev105877.service-now.com/api/now/v2/table/incident?sysparm_limit=1`,
        method:'get',
        headers:{
            'Authorization':`Bearer ${req.user}`
        }
    };
    axios(options).then((val)=>{
        res.send(val.data.result);
    }).catch((err)=>{
        res.send(err);
    });
});

module.exports = router;
