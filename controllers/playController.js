const Play = require('../models/play')

module.exports = {
    findAll: async (req, res) => {
        try {
            let allPlays = await Play.find()
            return res.json({data: allPlays});
        } catch(e) {
            return res.json({error: e});
        }
    },
    findOne: async (req, res) => {
        try {
            let foundPlay = await Play.findById(req.params.playId)
            return res.json(foundPlay)
        } catch(e) {
            return res.json({error: e})
        }
    },
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