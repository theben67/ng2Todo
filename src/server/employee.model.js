var mongoose = require('mongoose');

var employeeSchema = mongoose.Schema({
    nom: String,
    prenom: String,
    mail: String,
    numero: Number
});

var Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
