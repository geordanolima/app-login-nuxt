export default function ({ store, route, redirect }) {
  if (!store.getters['login/usuarioEstaLogado'] && route.path !== '/' && route.path !== '/login-pdv') {
    redirect(`/login-pdv?query=${route.path}`)
  }
}
