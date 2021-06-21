const express = require('express');
const router = express.Router();
const OrderTemplate = require('../modules/order')
const DriverTemplate = require('../modules/driver')
const mongoose = require('mongoose');

router.post('/' , async (request , response) => {

    const order = new OrderTemplate(
        {  
            deliveryDateTime:request.body.deliveryDateTime,
            pickup: {
                type:'Point',
                coordinates:[
                request.body.pickup.location.lng,
                request.body.pickup.location.lat,
                ]
            },
            pickup_address:request.body.pickup.address,
            dropoff_address:request.body.dropoff.address,
            dropoff: {
                type:'Point',
                coordinates:[
                request.body.dropoff.location.lng,
                request.body.dropoff.location.lat,
                ]
            },
            width:request.body.width,
            length:request.body.length,
            height:request.body.height,
            image:request.body.image,
            quotes:[
                await getDummyQuote(),
                await getDummyQuote(),
                await getDummyQuote(),
            ]
         })
     
    order.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})

router.get('/', async (request, response) => {
    OrderTemplate.find().populate({path:'quotes',populate:'driver'}).then(orders => {
        response.json(orders)
    }).catch(error => {
        response.json(error)
    });
});

router.get('/:id', (request, response) => {
    OrderTemplate.findById(mongoose.Types.ObjectId(request.params.id))
    .populate({path:'quotes',populate:'driver'})
    .then((driver) => {
        response.json(driver);
    })
    .catch(error => {
        response.status(400).json(error);
    })
});


const getDummyQuote = async () => {
    let drivers = await DriverTemplate.find().catch(error => {
        console.log(error);
        return {};
    });
    if (!drivers){
        return {};
    }
    drivers = drivers.map(driver => driver._id)
    let driverId = drivers[Math.floor(Math.random()*drivers.length)];
    return {
        price: Math.round(Math.random()*150*100)/100,
        driver: driverId,
    };
}

module.exports = router;