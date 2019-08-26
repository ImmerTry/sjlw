export default {
  setUserInfo (state, v) {
    state.userInfo = v
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
