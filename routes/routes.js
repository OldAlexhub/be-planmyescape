import Router from "express";
import Signup from "../controllers/Signup.js";
import Login from "../controllers/Login.js";
import InitialPlanning from "../controllers/InitialPlanning.js";
import CompletePlan from "../controllers/CompletePlan.js";
import DeletePlan from "../controllers/DeletePlan.js";
import GetPackages from "../controllers/GetPackages.js";
import PostExpense from "../controllers/PostExpense.js";
import GetExpenses from "../controllers/GetExpenses.js";
import DeleteExpense from "../controllers/DeleteExpense.js";

const router = Router();

router.post("/signup", Signup);
router.post("/login", Login);

router.post("/initial", InitialPlanning);
router.put("/complete/:userId", CompletePlan);
router.delete("/delete/:userId", DeletePlan);
router.get("/packages/:userId", GetPackages);
router.post("/postexpense", PostExpense);
router.get("/getexpenses/:userId", GetExpenses);
router.delete("/deleterecord/:_id", DeleteExpense);

export default router;
