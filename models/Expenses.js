import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema({
  userId: { type: String },
  date: { type: Date, default: Date.now },
  description: { type: String },
  category: { type: String },
  amount: { type: Number },
});
const ExpenseModel = mongoose.model("expenses", ExpenseSchema);

export default ExpenseModel;
