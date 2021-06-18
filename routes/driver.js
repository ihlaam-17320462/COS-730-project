const express = require('express');
const router = express.Router();
const DriverTemplate = require('../modules/driver')
const mongoose = require('mongoose');

// Create Driver
router.post('/' , (request , response) => {
    const driver = new DriverTemplate({
        name: request.body.name,
        vehicle:request.body.vehicle,
        image:request.body.image,
        location: {
            type:'Point',
            coordinates:[
                request.body.location.longitude,
                request.body.location.latitude,
            ]
        }
    });
    driver.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.status(500).json(error)
    })
})

// Update Driver 
router.patch('/:id', async (request, response) => {
    const driver = await DriverTemplate.findById(mongoose.Types.ObjectId(request.params.id)).catch(error => {return response.status(500).send(error)});
    if (!driver){
        return response.status(400).send("No driver found");
    }
    if (request.body.name){
        driver.name = request.body.name
    }
    if (request.body.vehicle){
        driver.vehicle = request.body.vehicle
    }
    if (request.body.image){
        driver.image = request.body.image
    }
    if (request.body.location){
        driver.location = {
            type:'Point',
            coordinates:[
                request.body.location.longitude,
                request.body.location.latitude,
            ]
        }
    }
    driver.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.status(500).json(error)
    })
})

// Get Driver
router.get('/:id', (request, response) => {
    DriverTemplate.findById(mongoose.Types.ObjectId(request.params.id))
    .then((driver) => {
        response.json(driver);
    })
    .catch(error => {
        response.status(400).json(error);
    })
})

module.exports = router;