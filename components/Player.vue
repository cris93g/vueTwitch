<template>
  <twitch-player
    :collection="collection"
  ></twitch-player>
</template>

<script>
  import VueTwitchPlayer from 'vue-twitch-player';

  export default {
    // ...
    components: {
      VueTwitchPlayer,
    },
    data() {
      return {
        collection: 'TbyX29kRqhRnxA',
      };
    },
    // ...
  };
</script>