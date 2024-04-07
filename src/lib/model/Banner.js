import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  image: { 
    type: String,
    required: true,
  },
  redirectUrl: {
    type: String,
    required: false,
  },
});

export default mongoose.model("Banner", bannerSchema);
