const express = require("express");
const axios = require("axios");

const router = express.Router();

const BASE_URL = process.env.BASE_URL + "weather";

router.get("/", async (req, res, next) => {
    try {
        const { data } = await axios.get(BASE_URL, {
            params: {
                q: req.query.city,
                units: req.query.units,
                appid: process.env.OPEN_API_KEY,
            },
        });
        const result = {
            succes: true,
            data: {
                date: data.weather[0].main,
                icon:
                    process.env.ICON_URL +
                    data.weather[0].icon +
                    process.env.EXT,
                temp: data.main.temp,
            },
        };
        return res.json(result);
    } catch (error) {
        return next(error);
    }
});

module.exports = router;
