const express = require("express");

const marsWeather = require("./mars-weather");

const currentWeather = require("./current-weather");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "API - 👋🌎🌍🌏",
    });
});

router.use("/mars-weather", marsWeather);
router.use("/weather", currentWeather);

module.exports = router;
