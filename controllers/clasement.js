const Clasement = require("../models/clasement");

module.exports = {
  index: async (req, res) => {
    try {
      const data = await Clasement.find();

      res.status(200).json({
        status: true,
        message: "welcome to clasement Lybra",
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
      const body = req.body;
      let created;
      let check;

      if (body.length == undefined) {
        // pemeriksaan duplikat
        check = await Clasement.find({
          nama: body.nama,
        });
        if (Object.keys(check).length == 1) {
          return res.status(400).json({
            status: false,
            message: "data sudah ada",
            data: null,
          });
        }

        const { nama, email } = body;
        created = await Clasement.insertMany({
          nama: nama,
          email: email,
        });
      } else {
        // pemeriksaan duplikat
        check = await Clasement.find({
          nama: body[0].nama,
        });
        check = await Clasement.find({
          nama: body[1].nama,
        });
        if (Object.keys(check).length == 1) {
          return res.status(400).json({
            status: false,
            message: "data sudah ada",
            data: null,
          });
        }

        created = body.map(
          async ({ nama, email }) =>
            await Clasement.insertMany({
              nama: nama,
              email: email,
            })
        );
      }

      created = await Promise.all(created);

      console.log(created);

      res.status(200).json({
        status: true,
        message: "success create data",
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
