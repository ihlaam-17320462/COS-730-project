const cron = require('node-cron');
const DriverTemplate = require('../modules/driver')

cron.schedule('*/10 * * * * *', () => {
    DriverTemplate.find()
    .then(drivers => {
        drivers.forEach(driver => {
            driver.location = {
                type:'Point',
                coordinates:[
                    driver.location.coordinates[0] + getRandomOffset(),
                    driver.location.coordinates[1] + getRandomOffset(),
                ]
            }
            driver.save().catch(err => console.log(err));
        })
    }).catch(err => {
        console.log(err);
    })
});

const getRandomOffset = () => {
    return (Math.random() < 0.5 ? -1 : 1) * 0.01;
}