import axios from "axios";

export const state = () => ({
    games:[],
    streams:[]
})

// export const getters = {
//     getterValue: state => {
//         return state.value
//     }
// }

export const mutations = {
    updateGetGames: (state, results) => {
        state.games = results
    },
    updateFeatured: (state,results)=>{
        state.streams=results;
    }
}

export const actions = {
   async getTopGames({ commit,state }) {
       if(state.games.length)return;
       try{
            let info= await axios.get(`http://localhost:3001/api/topgames`)
            let results = info.data;
            console.log(results)
            commit('updateGetGames',results)
       }catch(err){
           console.log(err)
       }
    },
    async getFeatured({commit,state}){
        if(state.streams.length)return;
        try{
            let info = await axios.get(`http://localhost:3001/api/featured`)
            let results = info.data;
            console.log(results)
            commit('updateFeatured',results)

        }catch(err){
            console.log(err);
        }
    }
}