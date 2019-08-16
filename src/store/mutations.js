export default {
  login (state, v) {
    state.userinfo = v
  },
  setToken (state, token) {
    state.token = token
    sessionStorage.token = token
  },
  delToken (state, token) {
    state.token = ''
    sessionStorage.removeItem('token')
  }
}
