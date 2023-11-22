const API_BASE_URL = "https://doctorshere-backend.vercel.app";

const getSpecialties = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/specialties`);
    if (!response.ok) {
      throw new Error(`Failed to fetch specialties: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching specialties:", error);
    throw error;
  }
};

const getDoctorsBySpecialty = async (specialty) => {
  try {
    const response = await fetch(`${API_BASE_URL}/doctors/${specialty}`);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch doctors for ${specialty}: ${response.statusText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching doctors for ${specialty}:`, error);
    throw error; // Re-throw the error to propagate it to the calling code
  }
};

const apiService = {
  getSpecialties,
  getDoctorsBySpecialty,
};

export default apiService;
