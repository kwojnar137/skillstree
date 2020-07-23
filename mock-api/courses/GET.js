{
    "school": {


    },
    "electronics": {

    },
    "dietetics": {

    },
}

module.exports = (req, res) =>
    res.status(200).json({
        id: 0,
        userName: req.params.userName,
        age: 20
    });

module.exports = (req, res) =>
    res.status(200).json({
        school: {
            science: {}
        },
        electronics: {

        },
        dietetics: {

        },
    });