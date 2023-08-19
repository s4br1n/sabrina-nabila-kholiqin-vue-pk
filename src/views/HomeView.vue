<template>
  <div>
    <hello-world />
    <v-row justify="center">
      <v-btn class="btn1"
        href="/character"
        color=purple
      >
        <span>Meet the character!</span>
      </v-btn>
    </v-row>
  </div>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'HomeView',

    components: {
      HelloWorld,
    },
  }
</script>
<style>
.btn1{
border-radius: 20px;
}
</style>