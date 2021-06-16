const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://eaicidadao:eaicidadao@cluster0.ndrx7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true, 
});
mongoose.Promise = global.Promise;

module.exports = mongoose;