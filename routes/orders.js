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
            pickup: {
                type:'Point',
                coordinates:[
                request.body.pickup.location.lng,
                request.body.pickup.location.lat,
                ]
            },
            dropoff: {
                type:'Point',
                coordinates:[
                request.body.dropoff.location.lng,
                request.body.dropoff.location.lat,
                ]
            },
            vehicle:request.body.vehicle.label,
            width:request.body.width,
            length:request.body.length,
            height:request.body.height,
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