const { Models } = require('mongoose');
const { HoldingSchema } = require('../schemas/HoldingSchema');

const HoldingModel = new Models('Holding', HoldingSchema);

module.exports = { HoldingModel };