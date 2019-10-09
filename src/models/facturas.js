// Models Settings
const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const facturaSchema = ({
    name: {type: String, required: true},
    email: {type: String, required: true},
    message: {type: String, required: true},
    filePath: {type: String}
});

module.exports = model('facturas', facturaSchema);