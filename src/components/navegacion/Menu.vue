<template>

     <v-app-bar
      app      
      color="primary"
      dark
    >

     
    <v-toolbar-title>EMPRESA</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon to="/admin" >
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn icon to="/publicacion">
      <v-icon>mdi-post</v-icon>
    </v-btn>

    <v-btn icon to="/ingresar">
      <v-icon>mdi-account</v-icon>
    </v-btn>
    

    </v-app-bar>
   
  
</template>

<script>
export default {
  data(){
    return {
      drawer: null
    }
  }

}
</script>

<style>

</style>