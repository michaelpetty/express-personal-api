const mongoose = require('mongoose')
const {MongoMemoryServer} = require('mongodb-memory-server')

let mongod = null

module.exports.connect = async () => {
    mongod = await MongoMemoryServer.create()
    const uri = mongod.getUri()
    const mongooseOpts = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    await mongoose.connect(uri, mongooseOpts)
}

module.exports.close = async () => {
    await mongoose.connection.dropDatabase()
    await mongoose.connection.close()
    await mongod.stop()
}

module.exports.dropCollections = async () => {
    const collections = await mongoose.connection.db.collections()
    for (let collection of collections) {
        await collection.deleteMany()
    }
}