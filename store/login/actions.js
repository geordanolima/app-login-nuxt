export function efetuarLogin ({ commit }, usuario) {
  return new Promise((resolve, reject) => {
    this.$axios.post('/user/logar', usuario)
      .then((response) => {
        commit('DEFINIR_USUARIO_LOGADO', {
          usuario: {
            ...response.data.usuario,
            token: response.data.Token
          }
        })
        resolve(response.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export function efetuarLogout ({ commit }, usuario) {
  commit('DESLOGAR_USUARIO')
}
