import VacationModel from "../models/Vacation.js";

const InitialPlanning = async (req, res) => {
  try {
    const {
      userId,
      fromDate,
      toDate,
      businessDays,
      weekEnds,
      Holidays,
      totalDays,
    } = req.body;

    const existingPlan = await VacationModel.findOne({ userId, fromDate });
    if (existingPlan) {
      return res.status(400).json({ message: `A plan already exists` });
    }

    const newVacation = new VacationModel({
      userId,
      fromDate,
      toDate,
      businessDays,
      weekEnds,
      Holidays,
      totalDays,
    });

    await newVacation.save();

    res.status(201).json({ message: `The Plan has been saved!` });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};

export default InitialPlanning;
