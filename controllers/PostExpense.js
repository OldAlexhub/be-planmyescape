import ExpenseModel from "../models/Expenses.js";

const PostExpense = async (req, res) => {
  try {
    const { userId, description, amount, category } = req.body;

    const newExpense = await ExpenseModel({
      userId,
      description,
      amount,
      category,
    });

    await newExpense.save();

    res.status(201).json({ message: `Added` });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};

export default PostExpense;
