require('dotenv').config()
const axios = require('axios');
const {CLIENT_ID} = process.env

const getTopGames = async (req,res)=>{
    try{
        let info = await axios.get(`https://api.twitch.tv/kraken/games/top?&limit=10`,{
            headers:{
                'Client-ID': CLIENT_ID,
                Accept: `application/vnd.twitchtv.v5+json`
            }
        })
        let results= info.data.top;
        if(results){
            res.status(200).send(results)
        }
    }catch(err){
            console.log(err)
    }
}

const getFeaturedStreams = async (req,res)=>{
    try{
        let info = await axios.get(`https://api.twitch.tv/kraken/streams/featured?&limit=5`,{
            headers:{
            'Client-ID': CLIENT_ID,
            Accept: `application/vnd.twitchtv.v5+json`
            }
        })
        let results = info.data.featured;
        if(results){
            res.status(200).send(results)
        }
    }catch(err){
        console.log(err)
    }
}

module.exports={
    getTopGames,
    getFeaturedStreams
}