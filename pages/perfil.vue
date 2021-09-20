<template>
  <div class="bg-image">
    <div class="px-4 padding-top">
      <v-card class="col">
        <div class="col d-flax row justify-space-between">
          <v-card-title class="text-h4">
            Meu perfil
          </v-card-title>
          <v-btn
            v-if="!modoEdicao"
            class="mx-2"
            color="primary"
            fab
            @click="modoEdicao=!modoEdicao"
          >
            <v-icon>
              mdi-pencil
            </v-icon>
          </v-btn>
          <div v-else>
            <v-btn
              class="mx-2"
              color="primary"
              fab
              @click="modoEdicao=!modoEdicao"
            >
              <v-icon>
                mdi-content-save
              </v-icon>
            </v-btn>
            <v-btn
              class="mx-2"
              color="secondary"
              fab
              @click="modoEdicao=!modoEdicao"
            >
              <v-icon>
                mdi-close
              </v-icon>
            </v-btn>
          </div>
        </div>
        <v-divider />
        <div class="col d-flax row">
          <div class="mx-1 col d-flax row">
            <v-text-field
              v-model="usuario.nome"
              class="col-12 my-0"
              label="Nome"
              color="primary"
              required
              :disabled="!modoEdicao"
            />
            <v-text-field
              v-model="usuario.email"
              class="col-12 my-0"
              label="Email"
              color="primary"
              required
              :disabled="!modoEdicao"
            />
            <v-text-field
              v-model="usuario.telefone"
              class="col-6 my-0"
              label="Telefone"
              color="primary"
              required
              :disabled="!modoEdicao"
            />
            <v-text-field
              v-model="usuario.celular"
              class="col-6 my-0"
              label="Celular"
              color="primary"
              required
              :disabled="!modoEdicao"
            />
            <v-text-field
              v-model="usuario.nascimento"
              class="col-4 my-0"
              label="Data nascimento"
              color="primary"
              required
              :disabled="!modoEdicao"
            />
            <v-text-field
              v-model="usuario.usuario"
              class="col-4 my-0"
              label="Nome usuário"
              color="primary"
              required
              :disabled="!modoEdicao"
            />
            <v-select
              v-model="usuario.sexo"
              :itens="opcoesSexo"
              class="col-4 my-0"
              label="Sexo"
              color="primary"
              :disabled="!modoEdicao"
            />
          </div>
          <div class="col-xl-2 row justify-center px-lg">
            <v-avatar size="150px">
              <img
                ref="photo"
                :src="usuario.foto || 'https://cdn.quasar.dev/img/boy-avatar.png'"
                alt="foto do usuário logado"
              >
            </v-avatar>
            <br>
            <v-file-input
              v-model="foto"
              class="col-12"
              placeholder="Alterar Imagem"
              accept="image/png, image/jpeg, image/bmp"
              prepend-icon="mdi-camera"
            />
            <v-btn
              class="mx-2"
              color="secondary"
              block
              @click="modoEdicao=!modoEdicao"
            >
              Alterar senha
            </v-btn>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      modoEdicao: false,
      usuario: {
        nome: '',
        email: '',
        telefone: '',
        celular: '',
        usuario: '',
        nascimento: '',
        foto: '',
        sexo: ''
      },
      foto: null
    }
  },
  watch: {
    foto (value) {
      console.log(value)
    }
  }

}
</script>

<style lang="scss" scoped>
.padding-top {
  padding-top: 8%;
}
.bg-image {
  background-image: url('~/assets/images/bg-company.png');
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>
