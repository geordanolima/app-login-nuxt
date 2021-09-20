<template>
  <div>
    <h1> paises favoritos </h1>
    <ul>
      <li v-for="pais in favoritos" :key="pais.id">
        <nuxt-link :to="'paises/' + pais.id">
          {{ pais.nome }}
        </nuxt-link>
        <v-btn
          depressed
          color="primary"
          label="favorito"
          @click="adicionarFavorito(pais)"
        >
          favorito
        </v-btn>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  middleware: 'permissoes',
  data () {
    return {
      paises: [
        { id: 1, nome: 'brasil' },
        { id: 2, nome: 'Argentina' },
        { id: 3, nome: 'Ecuador' },
        { id: 4, nome: 'usuguai' }
      ]
    }
  },
  computed: {
    ...mapGetters('paises', ['favoritos'])
  },
  methods: {
    ...mapActions('paises', ['adicionarFavorito'])
  }
}
</script>

<style>

</style>
