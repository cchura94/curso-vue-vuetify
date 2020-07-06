<template>
  <v-app>
    
    <MenuInicio v-if="!$route.meta.requireAuth"/>
    <MenuAdmin v-if="$route.meta.requireAuth"/>

<v-main>
      <v-container
        fluid
      >

        <router-view></router-view>

      </v-container>
</v-main>
       
      <v-btn v-on:click="usuarioAutenticado = !usuarioAutenticado" >Cambiar estado</v-btn>


  </v-app>
</template>

<script>
import MenuInicio from './components/navegacion/Menu'
import MenuAdmin from './components/navegacion/MenuAdmin'

import { verificarLogin } from './config.js'

export default {
  name: 'App',

  components: {
    MenuInicio,
    MenuAdmin
  },

  data: () => ({
    usuarioAutenticado: verificarLogin()
  }),
};
</script>
