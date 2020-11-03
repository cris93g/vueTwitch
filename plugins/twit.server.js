export default async({store})=>{
    await store.dispatch('getTopGames')
    await store.dispatch('getFeatured')
}