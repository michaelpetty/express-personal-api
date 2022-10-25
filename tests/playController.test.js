const Play = require('../models/play')
const db = require('./memoryDB')

beforeAll(async () => await db.connect())
afterEach(async () => await db.dropCollections())
afterAll(async () => await db.close())


describe('Play Model', () => {
    const basicPlay = {
        title: "Carousel",
        theatre: "Slidell Little Theatre",
        role: "Chorus",
        isMusical: true,
        openingNight: "05-10-1984",
    }, basicPlayWImg = {
        title: "The Diary of Anne Frank",
        theatre: "Slidell High School",
        role: "Albert Dussell",
        isMusical: false,
        openingNight: "10-26-1985",
        image: "/images/annefrank.jpg"
    }
    it('should create a play with a default img if not provided', async () => {
        const newPlay = await Play.create(basicPlay)
        expect(newPlay._id).toBeDefined()
        expect(newPlay.image).toBe('/images/playbill.jpg')
    })
    it('should create a play using the image provided', async () => {
        const newPlay = await Play.create(basicPlayWImg)
        expect(newPlay._id).toBeDefined()
        expect(newPlay.image).not.toBe('/images/playbill.jpg')
    })
})