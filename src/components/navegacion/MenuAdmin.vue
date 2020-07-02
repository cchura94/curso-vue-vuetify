<template>
  <div>
      <v-navigation-drawer
        v-model="drawer"
        app
        >
      <v-list dense>
        <v-list-item link to="/admin">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>ADMINISTRADOR</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item >
          <v-list-item-action link to="/admin/categoria">
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>CATEGORIA</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item >
          <v-list-item-action link to="/admin/producto">
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>PRODUCTO</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app      
      color="primary"
      dark
    >

 <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
     
    <v-toolbar-title>EMPRESA</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon to="/" >
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn icon to="/publicacion">
      <v-icon>mdi-post</v-icon>
    </v-btn>

    <v-btn icon to="/ingresar">
      <v-icon>mdi-account</v-icon>
    </v-btn>
    

    </v-app-bar>



  </div>
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