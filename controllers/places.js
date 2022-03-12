const router = require('express').Router()


// GET /places
router.get('/', (req, res) => {
    let places = [{
      name: 'The Norwegian',
      city: 'Rockford',
      state: 'IL',
      cuisines: 'Nordic, Coffee, Cocktails',
      pic:'https://d10j3mvrs1suex.cloudfront.net/u/274555/4c8d5f5f1d36d7bb2be141df1cb1bdd85c664b05/photo/1.jpg/!!/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg',
    }, {
      name: "Jim & Patty's",
      city: 'Beaverton',
      state: 'OR',
      cuisines: 'Coffee, Tea, Breakfast Sandwiches',
      pic: 'https://jim-pattys-coffee.square.site/uploads/1/3/5/1/135143057/s810439590534103056_p268_i2_w1920.jpeg?width=640',
    }]

    res.render('places/index', { places })
  })
  
module.exports = router;

