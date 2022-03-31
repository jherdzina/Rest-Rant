const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: { type: String, default: '/images/eggy-toast.jpg'}, //Photo by <a href="https://unsplash.com/@benkolde?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ben Kolde</a> on <a href="https://unsplash.com/s/photos/breakfast-food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: {
    type: Number,
    min: [1673, 'Surely not that old?!'],
    max: [new Date().getFullYear(), 'Hey, this year is in the future!']
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
})

placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.state} since ${this.founded}. `
}

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