<template>
  <div class="col d-flex justify-center align-content-center flex-wrap full-height">
    <v-card
      class="mx-auto col-4 login"
      elevation="2"
      outlined
      shaped
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="col d-flex justify-center">
            <img
              class="logo"
              alt="Logo"
              src="/logo-vertical.png"
              style="height: 170px"
            >
          </div>
          <div>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-text-field
                v-model="usuario.email"
                label="E-mail"
                color="primary"
                required
                dark
              />
              <v-text-field
                v-model="usuario.senha"
                :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPass ? 'text' : 'password'"
                name="senha"
                label="Senha"
                color="primary"
                required
                dark
                @click:append="showPass = !showPass"
              />

              <div class="col d-flex justify-space-between">
                <v-checkbox
                  v-model="usuario.lembrar"
                  label="Lembrar-me"
                  dark
                />
                <v-btn
                  class="my-3 white--text"
                  text
                >
                  Esqueci a senha
                </v-btn>
              </div>

              <v-btn
                color="primary"
                class="col my-3"
                x-large
                @click="$_efetuarLogin"
              >
                Acesse
              </v-btn>
              <v-btn
                color="primary"
                class="col my-3"
                outlined
                x-large
              >
                criar conta
              </v-btn>
            </v-form>
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {

  data () {
    return {
      usuario: {
        usuario: null,
        email: null,
        senha: null,
        lembrar: false
      },
      valid: false,
      showPass: false
    }
  },
  methods: {
    $_efetuarLogin () {
      this.usuario.usuario = this.usuario.email
      this.$store
        .dispatch('login/efetuarLogin', this.usuario)
        .then(() => {
          // this.$emit('usuarioLogado', this.$store.getters['login/usuarioLogado'])
          if (this.$router.currentRoute.query.query) {
            this.$router.push(this.$router.currentRoute.query.query)
          } else {
            this.$router.push('/')
          }
        })
        .catch((erro) => {
          if (erro && erro.request && erro.request.status === 401) {
            this.mensagemErro = '<div style="font-size:16pt">Login ou senha inválido(s)!</div>'
            // this.showNofify(this.mensagemErro, 'warning')
            alert('Login ou senha inválido(s)!')
          }
        })
    },
    validate () {
      this.$refs.form.validate()
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  border-radius: 15px;
  background-color: rgba(0,0,0,0.6);
}
</style>
