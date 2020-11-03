<template>
  <div id="app">
    <v-editable />
    <!-- <router-view></router-view> -->
  </div>
   
</template>

<script>
    import  editable from './components/editable.vue'
    export default {
        components:{
            'v-editable' : editable
        }
    }
</script>

<style >
   
</style>
