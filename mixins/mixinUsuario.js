import Vue from 'vue'

const mixinUsuario = {
  computed: {
    usuarioLogado () {
      return this.$store.getters['login/usuarioEstaLogado']
    },
    dadosUsuario () {
      return this.$store.getters['login/usuarioLogado']
    }
  }
}

Vue.mixin(mixinUsuario)
