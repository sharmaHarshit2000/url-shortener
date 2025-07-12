import mongoose from "mongoose";

const shortUrlSchema = new mongoose.Schema({
  original_url: { type: String, required: true },
  short_code: { type: String, unique: true, default: () => nanoid(8) }, // Genrate a random id by nanoId
  created_at: { type: Date, default: Date.now },
  click_count: { type: Number, default: 0 },
});
export default mongoose.model('ShortUrl', shortUrlSchema);
