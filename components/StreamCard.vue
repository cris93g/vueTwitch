<template>
    <section class="stream-container">
    <div v-for="stream in datasource" :key="stream.stream.channel._id">
        <img v-bind:src="`${stream.stream.preview.medium}`"/>
        <p>{{stream.stream.channel.display_name}}</p>
    </div>
   </section>
</template>

<script>
    export default {
     props:{
         datasource:{
             type:[Array,Object]
         }
     }   
    }
</script>

<style lang="scss" scoped>
    .stream-container{
    display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-around;
	align-items: stretch;
	align-content: stretch;
    }
</style>