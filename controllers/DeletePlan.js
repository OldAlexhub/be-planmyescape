import VacationModel from "../models/Vacation.js";

const DeletePlan = async (req, res) => {
  try {
    const { userId } = req.params;

    const vacation = await VacationModel.findOneAndDelete({ userId });

    if (!vacation) {
      return res.status(404).json({ message: "Vacation plan not found" });
    }

    res.status(200).json({ message: "Plan has been deleted" });
  } catch (error) {
    console.error("Error during vacation plan deletion:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

export default DeletePlan;
