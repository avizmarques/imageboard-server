const { Router } = require("express");
const Image = require("./model");

const router = new Router();

router.get("/image", async (req, res, next) => {
  try {
    const images = await Image.findAll();
    return images.length
      ? res.json(images)
      : res.status(404).send("No images found");
  } catch (err) {
    return next(err);
  }
});

router.post("/image", async (req, res, next) => {
  try {
    return res.json(await Image.create(req.body));
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
