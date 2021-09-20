<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      clipped
      fixed
      app
    >
      <v-list>
        <v-btn
          block
          @click.stop="miniVariant = !miniVariant"
        >
          <v-icon class="mr-2">
            mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}
          </v-icon>
          {{ `${miniVariant ? '' : ' Contrair'}` }}
        </v-btn>
        <v-list-item-group
          color="primary"
        >
          <v-list-item
            v-for="(item, i) in menu"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      class="white--text"
      clipped-left
      color="primary"
      fixed
      app
      dense
    >
      <v-app-bar-nav-icon
        class="white--text"
        @click.stop="drawer = !drawer"
      />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <div v-if="!dadosUsuario.usuario">
        <v-btn
          color="white"
          text
          to="/login-pdv"
        >
          <v-icon class="mr-2">
            mdi-account
          </v-icon>
          Login
        </v-btn>
      </div>
      <div v-else>
        <v-menu
          v-model="menuopen"
          :close-on-content-click="false"
          offset-x
          offset-y
          rounded="lg"
          max-width="400px"
        >
          <template #activator="{ on, attrs }">
            <v-btn
              color="white"
              text
              v-bind="attrs"
              v-on="on"
            >
              <v-icon class="mr-2">
                mdi-account
              </v-icon>
              {{ dadosUsuario.usuario }}
            </v-btn>
          </template>
          <div :class="`col d-flex row no-wrap ma-0 ${$vuetify.theme.dark ? 'grey darken-3': 'white'}`">
            <div class="col-7 justify-between">
              <div class="col">
                <div class="text-h6 mb-md">
                  Configurações
                </div>
                <v-switch
                  v-model="$vuetify.theme.dark"
                  label="Tema Escuro"
                />
              </div>
              <v-btn
                color="primary"
                text
                block
                to="/perfil"
                @click="menuopen = !menuopen"
              >
                Meu perfil
              </v-btn>
            </div>
            <v-divider vertical class="my-3" />
            <div class="col d-flex row no-wrap ma-1 justify-center">
              <v-avatar size="72px">
                <img
                  src="https://cdn.quasar.dev/img/boy-avatar.png"
                  :alt="`foto ${dadosUsuario.nome}`"
                >
              </v-avatar>
              <div class="mt-2 mb-1">
                {{ dadosUsuario.nome }}
              </div>
              <v-btn
                color="primary"
                text
                block
                @click="$_logout"
              >
                Logout
              </v-btn>
            </div>
          </div>
        </v-menu>
      </div>
    </v-app-bar>
    <v-main>
      <v-container class="full-height pa-0 ma-0">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import getPermissoes from '~/services/permissoes'

export default {
  name: 'LayoutDefault',

  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Bugio.pdv',
      menuopen: false,
      temaEscuro: false
    }
  },
  computed: {
    menu () {
      return this.menuList.filter((item) => { return item.habilitar })
    }
  },
  watch: {
    usuarioLogado (value) {
      if (value) {
        this.$_buscaPermissoes()
      }
    }
  },
  mounted () {
    this.$_buscaPermissoes()
  },
  methods: {
    $_buscaPermissoes () {
      getPermissoes(this.dadosUsuario.id)
        .then(({ data }) => {
          data.forEach((element) => {
            this.menuList.forEach((item) => {
              if (String(item.id) === String(element.permissao)) {
                item.habilitar = element.habilitar
              }
            })
          })
        })
        .catch(() => {})
    },
    $_logout () {
      this.$store
        .dispatch('login/efetuarLogout', this.usuario)
        .then(() => {
          this.menuList.forEach((item) => {
            if (String(item.id) !== 'home') {
              item.habilitar = false
            }
          })
          this.$router.push('/')
        })
        .catch((erro) => {
          if (erro && erro.request && erro.request.status === 401) {
            this.mensagemErro = '<div style="font-size:16pt">Login ou senha inválido(s)!</div>'
            // this.showNofify(this.mensagemErro, 'warning')
            alert('Erro ao deslogar!')
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.full-height {
  height:100%
}
</style>
