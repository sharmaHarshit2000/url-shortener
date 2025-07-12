import ShortUrl from "../models/ShortUrl.js";

export const shortenUrl = async (req, res) => {
  const { url } = req.body;
  try {
    const shortUrl = await ShortUrl.create({ original_url: url });
    res.status(201).json({
      message: "Short URL created successfully",
      short_url: `${process.env.BASE_URL}/${shortUrl.short_code}`,
      original_url: url,
    });
  } catch (err) {
    res.status(500).json({ message: `Error shortening URL:${err.message}` });
  }
};

export const redirectUrl = async (req, res) => {
  try {
    const shortUrl = await ShortUrl.findOne({ short_code: req.params.code });
    if (shortUrl) {
      shortUrl.click_count += 1;
      await shortUrl.save();
      res.redirect(shortUrl.original_url);
    } else {
      res.status(404).send("Short URL not found");
    }
  } catch (err) {
    res.status(500).send("Redirect error");
  }
};

export const analytics = async (req, res) => {
  try {
    const shortUrl = await ShortUrl.findOne({ short_code: req.params.code });

    if (!shortUrl) {
      return res.status(404).json({ message: "Short URL not found" });
    }

    res.status(200).json({
      short_code: shortUrl.short_code,
      original_url: shortUrl.original_url,
      click_count: shortUrl.click_count,
      created_at: shortUrl.created_at,
    });
  } catch (err) {
    res.status(500).send("Analytics error");
  }
};
