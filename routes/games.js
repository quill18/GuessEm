var express = require('express');
var router = express.Router();

// We are responding to urls that start with /games/

/* GET games index page. */
// Show user games they are currently in
// and give option to launch a new one?
router.get('/', function(req, res, next) {
    res.render('games/index', { title: 'Guess\'Em', activeGames: ["one", "two", "three"] });
  });
  
  router.get('/new', function(req, res, next) {
      // Show user a form to make a new game
    res.render('new', { title: 'Guess\'Em' });
  });

  router.post('/new', function(req, res, next) {
      // User has submitted a form with new game selections made
    //res.render('new', { title: 'Guess\'Em' });

    // If error, reload "new" form with error message?

    // If success, redirect to "play" view?

  });

  // http://something.come/games/play/34895702956

  router.get('/play/:playerMatchId', function(req, res, next) {
    // Each game will have two Player Match Ids
    // The /games/play url will include a player's own unique
    // id for their perspective of the game
  res.render('play', { title: 'Guess\'Em' });
});

router.get('/hide/:playerMatchId/:faceId', function(req, res, next) {
    // Each game will have two Player Match Ids
    // The /games/play url will include a player's own unique
    // id for their perspective of the game
  // REDIRECT to the play action?
  // What if this is just a simple JSON-esque response,
  // we will just send back a success/error state
  // game["asdasdasdasd"].show("asdasdasd", false)
});

router.get('/show/:playerMatchId/:faceId', function(req, res, next) {
    // Each game will have two Player Match Ids
    // The /games/play url will include a player's own unique
    // id for their perspective of the game
  // REDIRECT to the play action?
  // What if this is just a simple JSON-esque response,
  // we will just send back a success/error state
    // game["asdasdasdasd"].show("asdasdasd", true)

});

router.get('/status/:playerMatchId', function(req, res, next) {
    // Queries the match status -- how many upright
    // faces are left for your opponent. Each player's brower
    // will regularly ping this so the player knows how
    // their opponent is doing -- BUT ALSO if they finished!

    // JSONesque-reponse
});


// TODO: Final Guess?
// TODO: Win/Lose?

  module.exports = router;
