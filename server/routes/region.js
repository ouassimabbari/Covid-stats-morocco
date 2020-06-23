const router = require("express").Router();
const Region = require("../models/region");


router.post("/region", async (req, res) => {
    try {
        let region = new Region();
        region.name = req.body.name;

        await region.save();

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