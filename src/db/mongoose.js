const mongoose = require('mongoose');
// const validator = require('validator');
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    useCreateIndex: true});

  

    // const me = new User({
    //     name:'   Akshay',
    //     email:'AKSHAY@gmAil.com',
    //     password: 'Asods@1419',
    //     age: 10
    // });
    // me.save().then((result => {
    //     console.log("result>>>>>>>>>",result);
    // })).catch((error => {
    //     console.log("Error>>>>>>>>>>>>>>>>>>>>",error);
    // }))