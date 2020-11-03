const {getTopGames,getFeaturedStreams}= require('../controllers/apiController');

module.exports=app=>{
    app.get(`/api/topgames`,getTopGames)
    app.get(`/api/featured`,getFeaturedStreams)
}