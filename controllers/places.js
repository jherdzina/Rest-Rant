const router = require('express').Router()


// GET /places
router.get('/', (req, res) => {
    let places = [{
      name: 'The Norwegian',
      city: 'Rockford',
      state: 'IL',
      cuisines: 'Nordic, Coffee, Cocktails',
      pic:'/images/Norweigian pic.jpeg',
    }, {
      name: "Jim & Patty's",
      city: 'Beaverton',
      state: 'OR',
      cuisines: 'Coffee, Tea, Breakfast Sandwiches',
      pic: '/images/jim-pattys-breakfast-sammy.webp',
    }]

    res.render('places/index', { places })
  })
  
module.exports = router;

