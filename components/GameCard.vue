<template>
    <section class="gamecard-container">
        <div v-for="game in datasource" :key="game.game._id">
            <img v-bind:src="`${game.game.box.medium}`" />
            <p>{{game.game.name}}</p>
            <p>{{game.viewers}}</p>
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
    .gamecard-container{
        display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-around;
	align-items: stretch;
	align-content: stretch;
    }
</style>