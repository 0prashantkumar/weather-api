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
        // 2. respond to this request with data from nasa api
        return res.json(data);
    } catch (error) {
        return next(error);
    }
});

module.exports = router;
