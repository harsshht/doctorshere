const specialtiesData = require('../data/specialties.json');

const getSpecialties = (req, res) => {
  res.json(specialtiesData);
};

module.exports = {
  getSpecialties,
};
