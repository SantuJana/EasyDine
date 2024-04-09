import { Schema, model, models } from "mongoose";

const bannerSchema = new Schema({
  title: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  redirectUrl: { type: String, required: false },
});

const Banner = models.Banner || model("Banner", bannerSchema);
export default Banner;
