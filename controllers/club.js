const Club = require("../models/club");

module.exports = {
  index: async (req, res) => {
    try {
      const data = await Club.find();

      res.status(200).json({
        status: true,
        message: "list all club for competition lybra",
        data: data,
      });
    } catch (err) {
      res.status(500).json({
        status: false,
        message: err,
        data: null,
      });
    }
  },

  create: async (req, res) => {
    try {
      const { name } = req.body;

      check = await Club.find({
        name: name,
      });

      if (Object.keys(check).length == 1) {
        return res.status(400).json({
          status: false,
          message: "name club already exist",
          data: null,
        });
      }

      created = await Club.insertMany({
        name,
      });

      res.status(200).json({
        status: true,
        message: "success create data club",
        data: created,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: false,
        message: err,
        data: null,
      });
    }
  },
};
