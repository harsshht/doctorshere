const fs = require('fs');
const path = require('path');

const getDoctorsBySpecialty = (req, res) => {
  const { specialty } = req.params;
  const doctorsPath = path.join(__dirname, '../data/doctors', `${specialty.toLowerCase()}.json`);

  try {
    const doctorsData = JSON.parse(fs.readFileSync(doctorsPath, 'utf-8'));
    res.json(doctorsData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getDoctorsBySpecialty,
};
