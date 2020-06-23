const router = require("express").Router();
const Stats = require("../models/stats");
const Region = require("../models/region");


router.post("/stats", async (req, res) => {
    try {
        let stats = new Stats();
        var arrayDate = req.body.record_date.split("/");
        var date = new Date(arrayDate[2], parseInt(arrayDate[1]) - 1, arrayDate[0]);
        stats.city = req.body.cityId;
        stats.record_date = date;
        stats.active_cases = parseInt(req.body.active_cases);
        stats.total_cases = parseInt(req.body.total_cases);
        stats.new_cases = parseInt(req.body.new_cases);
        stats.total_recovered = parseInt(req.body.total_recovered);
        stats.new_recovered = parseInt(req.body.new_recovered);
        stats.total_deaths = parseInt(req.body.total_deaths);
        stats.new_deaths = parseInt(req.body.new_deaths);

        await stats.save();

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


router.route("/statsByCountry").get(function (req, res) {
    Stats.aggregate(
        [{
                $match: {
                    record_date: new Date(2020, parseInt(03) - 1, 31)
                }
            },
            {
                $group: {
                    _id: null,
                    total_cases: {
                        $sum: "$total_cases"
                    },
                    active_cases: {
                        $sum: "$active_cases"
                    },
                    total_recovered: {
                        $sum: "$total_recovered"
                    },
                    total_deaths: {
                        $sum: "$total_deaths"
                    },
                    new_cases: {
                        $sum: "$new_cases"
                    }
                }
            }
        ],
        function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        }
    );
});


router.route("/statsByRegion").get(function (req, res) {
    Stats.aggregate(
        [{
                $match: {
                    record_date: new Date(2020, 2, 31)
                }
            },
            {
                $lookup: {
                    from: "cities",
                    localField: "city",
                    foreignField: "_id",
                    as: "city"
                }
            },
            {
                $group: {
                    _id: "$city.region_name",
                    total_cases: {
                        $sum: "$total_cases"
                    },
                    active_cases: {
                        $sum: "$active_cases"
                    },
                    total_recovered: {
                        $sum: "$total_recovered"
                    },
                    total_deaths: {
                        $sum: "$total_deaths"
                    },
                    new_cases: {
                        $sum: "$new_cases"
                    }
                }
            }, {
                $sort: {
                    total_cases: -1
                }
            }
        ],
        function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        }
    );
});



router.route("/statsByCity").get(function (req, res) {
    Stats.aggregate(
        [{
                $match: {
                    record_date: new Date(2020, 2, 31)
                }
            }, {
                $lookup: {
                    from: "cities",
                    localField: "city",
                    foreignField: "_id",
                    as: "city"
                }
            },
            {
                $group: {
                    _id: {
                        city: "$city.name"
                    },
                    total_cases: {
                        $sum: "$total_cases"
                    },
                    active_cases: {
                        $sum: "$active_cases"
                    },
                    total_recovered: {
                        $sum: "$total_recovered"
                    },
                    total_deaths: {
                        $sum: "$total_deaths"
                    },
                    new_cases: {
                        $sum: "$new_cases"
                    }
                }
            }, {
                $sort: {
                    total_cases: -1
                }
            }
        ],
        function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        }
    );
});


router.route("/statsByCountryHistory").get(function (req, res) {
    Stats.aggregate(
        [{
            $group: {
                _id: "$record_date",
                total_cases: {
                    $sum: "$total_cases"
                },
                active_cases: {
                    $sum: "$active_cases"
                },
                total_recovered: {
                    $sum: "$total_recovered"
                },
                total_deaths: {
                    $sum: "$total_deaths"
                },
                new_cases: {
                    $sum: "$new_cases"
                }
            }
        }, {
            $sort: {
                _id: 1
            }
        }],
        function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        }
    );
});


module.exports = router;