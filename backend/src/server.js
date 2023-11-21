const express = require('express');
const cors = require('cors');
const specialtiesRoutes = require('./routes/specialtiesRoutes');
const doctorsRoutes = require('./routes/doctorsRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.use(express.json());

app.use('/specialties', specialtiesRoutes);
app.use('/doctors', doctorsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
