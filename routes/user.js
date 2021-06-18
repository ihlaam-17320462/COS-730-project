const express = require('express');
const router = express.Router();
const userInfoTemplate = require('../modules/user')

router.post('/' , (request , response)=> {
    const registeredUser = new userInfoTemplate(        
        {
        firstName:request.body.firstName,
        lastName:request.body.lastName,
        username:request.body.userName,
        password:request.body.password 
        })
     
    registeredUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})

module.exports = router;