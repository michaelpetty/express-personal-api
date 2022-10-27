const Play = require('../models/play')

module.exports = {
    findAll: async (req, res) => {
        try {
            let allPlays = await Play.find()
            return res.json({data: allPlays});
        } catch(e) {
            return res.json({error: err});
        }
    },
    findOne: () => {},
    createOne: async (req, res) => {
        try {
            let savedPlay = await Play.create(req.body)
            return res.json(savedPlay);
        } catch(e) {
            return res.json({error: e})
        }
      },
      createMany: async (req,res) => {
        return await module.exports.createOne(req, res)
      }
}