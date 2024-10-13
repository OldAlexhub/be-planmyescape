import ExpenseModel from "../models/Expenses.js";

const GetExpenses = async (req, res) => {
  try {
    const { userId } = req.params;

    const data = await ExpenseModel.find({ userId });

    res.status(200).json({ message: `Data`, data });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};

export default GetExpenses;
