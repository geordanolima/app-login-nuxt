import Vue from 'vue'

const mixinMenu = {
  data: () => {
    return {
      menuList: [
        {
          id: 'home',
          icon: 'mdi-home',
          title: 'Inicio',
          separator: false,
          habilitar: true,
          active: true,
          to: '/'
        },
        {
          id: 'dashboard',
          icon: 'mdi-view-dashboard',
          title: 'Dashboard',
          separator: false,
          habilitar: false,
          active: false,
          to: '/dashboard'
        },
        {
          id: 'settings',
          icon: 'mdi-cog',
          title: 'configurações',
          separator: true,
          habilitar: false,
          active: false,
          to: '/configuracoes'
        },
        {
          id: 'users',
          icon: 'mdi-account',
          title: 'usuarios',
          separator: false,
          habilitar: false,
          active: false,
          to: '/usuarios'
        },
        {
          id: 'config',
          icon: 'mdi-account-cog',
          title: 'permissões',
          separator: true,
          habilitar: false,
          active: false,
          to: '/permissoes'
        },
        {
          id: 'clients',
          icon: 'mdi-account-multiple',
          title: 'clientes',
          separator: false,
          habilitar: false,
          active: false,
          to: '/clientes'
        },
        {
          id: 'products',
          icon: 'mdi-shopping',
          title: 'produtos',
          separator: false,
          habilitar: false,
          active: false,
          to: '/produtos'
        },
        {
          id: 'store',
          icon: 'mdi-store',
          title: 'vendas',
          separator: false,
          habilitar: false,
          active: false,
          to: '/vendas'
        }
      ]
    }
  }
}

Vue.mixin(mixinMenu)
