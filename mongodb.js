const mongodb = require('mongodb');
const {MongoClient, ObjectId} = mongodb;
const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-maanager';
MongoClient.connect(connectionUrl,{useNewUrlParser: true},(error,client) => {
    if(error){
        return console.log('Not Connected')
    }
    console.log("Connected successfully")
    const db = client.db(databaseName);
// Inser One

    // db.collection('users').insertOne({
    //     name: 'Akshay',
    //     age: '26'
    // },(error, result) => {
    //     if(error){
    //         return console.log("Insertion Failed");
    //     }
    //     console.log(result.ops);
    // })

// InsertMany

    // db.collection('users').insertMany([
    //     {
    //         name: "Kunju",
    //         age: 20
    //     },
    //     {
    //         name: "Ayana",
    //         age:  23
    //     }
    // ],(error, result) => {
    //     if(error){
    //         return console.log("Insertion Failed");
    //     }
    //     console.log(result.ops);
    // })

// Read OPeration
// db.collection('users').findOne({_id: ObjectId("6053ad0c3918a827a06c4571")},(error, user) => {
//          if(error){
//             return console.log("Find Failed");
//         }
//         console.log(user)
// })
// db.collection('users').find({age:'26'}).toArray((error, user) => {
//     if(error){
//        return console.log("Find Failed");
//    }
//    console.log(user)
// // })

// Update Operation
db.collection('users').updateOne(
    {_id: new ObjectId('6053ad0c3918a827a06c4571')},
    {
        $set:{
            name:'AKSHAYDS'
        }
    }
    ).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })
})