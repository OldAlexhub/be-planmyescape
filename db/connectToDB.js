import mongoose from "mongoose";

const connectToDB = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log(`Connected to MongoDb`);
  } catch (error) {
    console.log(`Failed to connect To MongoDb`);
  }
};

export default connectToDB;
