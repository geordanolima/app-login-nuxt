<template>
  <div id="imageBackground" class="d-flex bg-image bg-image-screen bg-image-header">
    <cLogin />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
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
  methods: {
    ...mapActions('login', ['efetuarLogin'])
  }
}
</script>

<style lang="scss" scoped>
@media only screen and (max-device-width: 1024px) {
  .bg-image-screen {
    background-position: center;
  }
}
@media only screen and (min-device-width: 1023px) {
  .bg-image-screen {
    background-size: 100%;
  }
}
.bg-image {
  background-image: url('~/assets/images/login-wallpaper.jpg');
  background-repeat: no-repeat;
}
.bg-image-full{
  height: 100vh;
}

.bg-image-header{
  height: 94.85vh;
  width: 107%;
}

</style>
