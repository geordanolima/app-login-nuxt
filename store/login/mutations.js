export function DEFINIR_USUARIO_LOGADO (state, { token, usuario }) {
  this.$axios.defaults.headers.authorization = token
  state.usuario = usuario
}

export function DESLOGAR_USUARIO (state) {
  this.$axios.defaults.headers.authorization = null
  state.usuario = {
    id: 0,
    nome: null,
    senha: null,
    email: null,
    usuario: null,
    token: null
  }
  this.$router.push('/')
}
