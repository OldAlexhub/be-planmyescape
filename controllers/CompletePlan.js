import VacationModel from "../models/Vacation.js";

const CompletePlan = async (req, res) => {
  try {
    const { userId } = req.params;

    // Find the vacation plan for the given userId
    const userVacation = await VacationModel.findOne({ userId });
    if (!userVacation) {
      return res.status(404).json({ message: "Vacation plan not found!" });
    }

    const {
      origin,
      destination,
      budget,

      avgHotels,
      avgTransportation,
      avgAirbnb,
      avgFlights,
    } = req.body;

    // Update the vacation plan with the new data
    userVacation.origin = origin;
    userVacation.destination = destination;
    userVacation.budget = budget;
    userVacation.avgHotels = avgHotels;
    userVacation.avgTransportation = avgTransportation;
    userVacation.avgAirbnb = avgAirbnb;
    userVacation.avgFlights = avgFlights;

    // Save the updated document
    await userVacation.save();

    // Respond with a success message
    res.status(200).json({ message: "Vacation plan updated successfully!" });
  } catch (error) {
    console.error("Error during vacation plan update:", error);
    res.status(500).json({ message: "Server Error!" });
  }
};

export default CompletePlan;
