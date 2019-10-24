const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://nodetrainer:ng9RWzHMqszEtM15@cluster0-nirbb.mongodb.net/training?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose