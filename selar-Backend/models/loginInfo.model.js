import mongoose from "mongoose"

const loginActivitySchema = new mongoose.Schema({
  user: { type: String },
  deviceInfo: { type: String },
  ip: { type: String },
  location: { type: String },
  loginTime: { type: Date, default: Date.now }
});

const loginSchema = mongoose.model("loginActivity", loginActivitySchema)

export default loginSchema
