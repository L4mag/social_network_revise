import axios from 'axios'

const apiInstance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'b4ddf7e6-b243-4906-b631-828bf878521a',
  },
  withCredentials: true,
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 8) {
    return apiInstance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data)
  },
  followUser(userId) {
    return apiInstance
      .post(`follow/${userId}`)
      .then((response) => response.data)
  },
  unFollowUser(userId) {
    return apiInstance
      .delete(`follow/${userId}`)
      .then((response) => response.data)
  },
}

export const authAPI = {
  getUserData() {
    return apiInstance
      .get(`auth/me`)
      .then((response) => response.data)
  },
  login(email, password, rememberMe) {
    return apiInstance
      .post(`auth/login`, { email, password, rememberMe })
      .then((response) => response.data)
  },
  logout(email, password, rememberMe) {
    return apiInstance
      .post(`auth/logout`)
      .then((response) => response.data)
  },
}

export const profilesAPI = {
  getUserProfile(userId) {
    return apiInstance
      .get(`profile/${userId}`)
      .then((response) => response.data)
  },
  getUserStatus(userId) {
    return apiInstance
      .get(`profile/status/${userId}`)
      .then((response) => response.data)
  },
  setUserStatus(status) {
    return apiInstance
      .put(`profile/status`, { status })
      .then((response) => response.data)
  },
}
