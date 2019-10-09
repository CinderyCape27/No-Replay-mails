// Models Settings
const { Schema, model } = require('mongoose');

const facturaSchema = ({
    name: {type: String, required: true},
    email: {type: String, required: true},
    message: {type: String, required: true},
    filePath: {type: String}
});

module.exports = model('facturas', facturaSchema);