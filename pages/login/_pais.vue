<template>
  <div>
    detalhe pais:{{ pais.nome }}
  </div>
</template>

<script>
export default {
  // context.params
  validate ({ params }) {
    return /^\d+$/.test(params.pais)
  },
  asyncData ({ params }) {
    const idPais = +params.pais
    const paises = [
      { id: 1, nome: 'brasil' },
      { id: 2, nome: 'Argentina' },
      { id: 3, nome: 'Ecuador' },
      { id: 4, nome: 'usuguai' }
    ]
    const pais = paises.find(x => x.id === idPais)
    return { pais }
  }
}
</script>

<style>

</style>
