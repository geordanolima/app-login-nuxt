import { api } from './baseService'

export default function getPermissoes (id) {
  return new Promise((resolve, reject) => {
    api.get(`/permissoes/${id}`)
      .then((response) => {
        resolve(response)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
