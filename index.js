const mongoose=require('mongoose');
const Dishes = require('./models/dishes');
const url ='mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);
connect.then((db) => {
    console.log('Connected correctly to server');

  Dishes.create({
        name: 'Uthappizza',
        description: 'test'
    })
    .then((dish) => {
        console.log(dish);
<<<<<<< HEAD
      return  Dishes.find({}).exec();
=======
       return Dishes.find({}).exec();
>>>>>>> 0e1ef902a055102a70222ba5472df2b74845c8af
    })
    .then((dishes) => {
        console.log(dishes);
        return Dishes.remove();
    })
    .then(() => {
        return mongoose.connection.close();
    })
    .catch((err) => {
        console.log(err);
    });
});
