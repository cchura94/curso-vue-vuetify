<template>
  <div>
      <v-navigation-drawer
        v-model="drawer"
        app
         clipped
        >
      <v-list dense>
        <v-list-item v-for="(menu, index) in menus" :key="index" link :to="menu.url">
          <v-list-item-action>
            <v-icon>{{menu.icono}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ menu.nombre }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

       

      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app      
      color="dark"
      dark
      clipped-left=""
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
            drawer: null,
            menus: [
              {url: "/admin", nombre:"ADMINISTRADOR", icono: "mdi-home"},
              {url: "/admin/categoria", nombre:"CATEGORIA", icono: "mdi-home"},
              {url: "/admin/producto", nombre:"PRODUCTO", icono: "mdi-home"}
            ]
        }
    }

}
</script>

<style>

</style>