<template>
  <div id="app">
    <v-xinhua />
    <!-- <router-view></router-view> -->
  </div>
   
</template>

<script>
    // import  editable from './components/editable.vue'
    import  xinhua from './components/xinhua.vue'
    export default {
        components:{
            'v-xinhua' : xinhua
        }
    }
</script>

<style >
   
</style>
