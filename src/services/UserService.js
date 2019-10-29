import api from '@/services/api'

export default {
  getFile(link) {
    return api().get(`search?query=${link}`)
  }
}
