<template >
  <main class="container">
    <StreamCard :datasource="streams"/>
    <hr/>
    <br/>
    <GameCard :datasource="games"/>
 
  </main>
</template>

<script>
  import GameCard from '@/components/GameCard.vue';
  import StreamCard from '@/components/StreamCard.vue';


  import {mapState} from 'vuex'
  export default {
    components:{
      GameCard,
      StreamCard,

    },computed:{
      ...mapState(['games','streams'])
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    background-color: #35495e;
    width:100vw;
    height: 100vh;
    align-items: center;
    margin: auto;
  }

</style>
