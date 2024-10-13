import VacationModel from "../models/Vacation.js";

const GetPackages = async (req, res) => {
  try {
    const userId = String(req.params.userId); // Explicitly convert userId to a string
    console.log(userId);
    // Retrieve the vacation package associated with the userId
    const vacationPackage = await VacationModel.findOne({ userId });

    // If no package is found, respond with a 404
    if (!vacationPackage) {
      return res.status(404).json({ message: "Vacation package not found!" });
    }

    // Return the found package
    res.status(200).json(vacationPackage);
  } catch (error) {
    // Log the error and respond with a server error status
    console.error("Error retrieving vacation package:", error);
    res.status(500).json({ message: "Server Error!" });
  }
};

export default GetPackages;
