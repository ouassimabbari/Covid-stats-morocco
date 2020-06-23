const router = require("express").Router();
const City = require("../models/city");


router.post("/city", async (req, res) => {
    try {
        let city = new City();
        city.name = req.body.name;
        city.region = req.body.region;
        city.region_name = req.body.region_name;

        await city.save();

        res.json({
            status: true,
            message: "Successfully saved"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

module.exports = router;