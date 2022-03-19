const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: Number
})

module.exports = mongoose.model('Place', placeSchema)


// module.exports = [{
//     name: 'The Norwegian',
//     city: 'Rockford',
//     state: 'IL',
//     cuisines: 'Nordic Cuisine, Coffee, & Cocktails',
//     pic:'/images/Norweigian pic.jpeg',
//   }, {
//     name: "Jim & Patty's",
//     city: 'Beaverton',
//     state: 'OR',
//     cuisines: 'Coffee, Tea, & Breakfast Sandwiches',
//     pic: '/images/jim-patty-latte.webp',
//   }, {
//     name: "Milk Bar",
//     city: 'New York',
//     state: 'NY',
//     cuisines: 'Cake, Pie, Ice Cream, & Cookies',
//     pic: '/images/milk-bar.webp',
// }]