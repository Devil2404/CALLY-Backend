const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/cally?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'

const connectToMongoo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Ready to go next level");
    })
}
module.exports = connectToMongoo;