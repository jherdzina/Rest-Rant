const db = require('../models')

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/h-thai-ml-tables.jpg', //https://unsplash.com/photos/YpfRCe5lda0
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffee-cat.jpg', //Photo by <a href="https://unsplash.com/@rebaspike?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Reba Spike</a> on <a href="https://unsplash.com/s/photos/cat-cafe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    founded: 2020
}])

.then(() => {
    //console.log('Success!')
    process.exit()
})
.catch(err => {
    //console.log('Failure!', err)
    process.exit()
})