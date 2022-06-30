const Competition = require("../models/competition");

module.exports = {
  index: async (req, res) => {
    try {
      const result = await Competition.find();

      res.status(200).json({
        status: true,
        message: "welcome to competiton Lybra",
        data: result,
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

  create: async (req, res) => {
    try {
      const body = req.body;
      let scoreHome, scoreAway, created, check;

      if (body.length == undefined) {
        // *NOTE: single input
        const { home, away, resultHome, resultAway } = req.body;

        if (home == away) {
          return res.status(400).send({
            status: false,
            message: "home dan away pastikan klubnya berbeda",
            data: null,
          });
        }

        if (resultHome == "Menang") {
          scoreHome = 3;
        } else if (resultHome == "Seri") {
          scoreHome = 1;
        } else {
          scoreHome = 0;
        }

        if (resultAway == "Menang") {
          scoreAway = 3;
        } else if (resultAway == "Seri") {
          scoreAway = 1;
        } else {
          scoreAway = 0;
        }

        created = await Competition.insertMany({
          home,
          away,
          resultHome: scoreHome,
          resultAway: scoreAway,
        });
      } else {
        // *NOTE: multiple input
        created = body.map(async ({ home, away, resultHome, resultAway }) => {
          if (home == away) {
            return res.status(400).send({
              status: false,
              message: "home dan away pastikan klubnya berbeda",
              data: null,
            });
          }

          if (resultHome == "Menang") {
            scoreHome = 3;
          } else if (resultHome == "Seri") {
            scoreHome = 1;
          } else {
            scoreHome = 0;
          }

          if (resultAway == "Menang") {
            scoreAway = 3;
          } else if (resultAway == "Seri") {
            scoreAway = 1;
          } else {
            scoreAway = 0;
          }

          await Competition.insertMany({
            home,
            away,
            resultHome: scoreHome,
            resultAway: scoreAway,
          });
        });
      }

      // created = new Promise(function (resolve, reject) {
      //   resolve(created);
      // });

      // // created = await Promise.resolve(created).catch((err) => {
      // //   throw Error(err);
      // // });

      // created
      //   .then(function (result) {
      //     console.log(result);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      // created = await Promise.all(created);

      // const result = new Promise((resolve, reject) => {
      //   resolve(created);
      // });

      // result.then(function (result) {
      //   console.log(result);
      // });

      // console.log("created => ", result);

      res.status(200).json({
        status: true,
        message: "success create competition",
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
