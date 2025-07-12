import ShortUrl from "../models/ShortUrl.js";

export const shortenUrl = async (req, res) => {
  const { url } = req.body;
  try {
    const shortUrl = await ShortUrl.create({ original_url: url });
    res.status(201).json({
      message: "Short URL created successfully",
      short_url: `${process.env.BASE_URL}/${shortUrl.short_code}`,
    });
  } catch (err) {
    res.status(500).json({ message: `Error shortening URL:${err.message}` });
  }
};
