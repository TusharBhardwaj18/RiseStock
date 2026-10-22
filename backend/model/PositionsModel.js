const { model } = require('mongoose');
const { PositionsModel } = require('../schemas/PositionsModel');

const PositionsModel = new model('Position', PositionsModel);

module.exports = { PositionsModel };