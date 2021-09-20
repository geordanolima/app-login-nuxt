export function usuarioEstaLogado (state) {
  return Boolean(state.usuario.token)
}
export function idUsuarioLogado (state) {
  return state.usuario.id ? state.usuario.id : 0
}
export function nomeUsuarioLogado (state) {
  return state.usuario.nome ? state.usuario.nome : ''
}
export function emailUsuarioLogado (state) {
  return state.usuario.email ? state.usuario.email : ''
}
export function usuarioUsuarioLogado (state) {
  return state.usuario.usuario ? state.usuario.usuario : ''
}
export function tokenUsuarioLogado (state) {
  return state.usuario.token ? state.usuario.token : ''
}
export function usuarioLogado (state) {
  return {
    id: idUsuarioLogado(state),
    nome: nomeUsuarioLogado(state),
    email: emailUsuarioLogado(state),
    usuario: usuarioUsuarioLogado(state),
    token: tokenUsuarioLogado(state)
  }
}
