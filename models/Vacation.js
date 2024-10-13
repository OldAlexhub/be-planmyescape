import mongoose from "mongoose";

const VacationSchema = new mongoose.Schema({
  userId: { type: String },
  fromDate: { type: Date },
  toDate: { type: Date },
  origin: { type: String },
  destination: { type: String },
  budget: { type: Number },
  totalDays: { type: Number },
  businessDays: { type: Number },
  weekEnds: { type: Number },
  Holidays: { type: Number },
  avgHotels: { type: Number },
  avgTransportation: { type: Number },
  avgAirbnb: { type: Number },
  avgFlights: { type: Number },
});
const VacationModel = mongoose.model("details", VacationSchema);

export default VacationModel;
