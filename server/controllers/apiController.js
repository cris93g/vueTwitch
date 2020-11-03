require('dotenv').config()
const axios = require('axios');
const {CLIENT_ID} = process.env

const getTopGames = async (req,res)=>{
    try{
        let info = await axios.get(`https://api.twitch.tv/kraken/games/top`,{
            headers:{
                'Client-ID': CLIENT_ID,
                Accept: `application/vnd.twitchtv.v5+json`
            }
        })
        let results= info.data;
        if(results){
            res.status(200).send(results)
        }
    }catch(err){

    }
}

const getFeaturedStreams = async (req,res)=>{
    try{
        let info = await axios.get(`https://api.twitch.tv/kraken/streams/featured`,{
            headers:{
            'Client-ID': CLIENT_ID,
            Accept: `application/vnd.twitchtv.v5+json`
            }
        })
        let results = info.data;
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