import ExpenseModel from "../models/Expenses.js";

const DeleteExpense = async (req, res) => {
  try {
    const { _id } = req.params;

    const record = await ExpenseModel.findOneAndDelete({ _id });

    res.status(201).json({ message: `Record Deleted!`, record });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};

export default DeleteExpense;
