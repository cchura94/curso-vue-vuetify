<template>
    <div>
        <h1>Categoria</h1>
        
        <v-simple-table dense="">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">NOMBRE</th>
          <th class="text-left">DESCRIPCION</th>
          <th class="text-left">ACCIONES</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cat in datos" :key="cat.id">
          <td>{{ cat.id }}</td>
          <td>{{ cat.nombre }}</td>
          <td>{{ cat.descripcion }}</td>
          <td>
              <v-btn>editar</v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
    </div>
  
</template>

<script>
import axios from 'axios'
import { getHeader, url_base } from './../../config.js'
export default {
    data(){
        return {
            datos: []

        }
    },
    created(){
        axios.get(url_base +"/categoria", {headers: getHeader()}).then((res) => {
            this.datos = res.data.datos
        }).catch((error) => {
            console.log(error)
        });
    }

}
</script>

<style>

</style>