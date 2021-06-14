const express = require('express');
const router = express.Router();
const OrderTemplate = require('../modules/order')

// const upload = multer({
//     dest: "uploads/",
//     limits: { fieldSize: 25 * 1024 * 1024 },
//   });

router.post('/' , (request , response)=> {
    console.log("========================")
    console.log(request.body);
    const order = new OrderTemplate(
        {
            // plocation:request.body.plocation,
            // dlocation:request.body.dlocation,
            // categoryId: parseInt(req.body.categoryId),
            
            password:request.body.password,
            width:request.body.width,
            height:request.body.height,
            length:request.body.length,
         })
     
    order.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})

module.exports = router;