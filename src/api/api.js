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
      .then((response) => response.data.items)
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
      .then((response) => response.data.data)
  },
}

export const profilesAPI = {
  getUserProfile(userId) {
    return apiInstance
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
      )
      .then((response) => response.data)
  },
}
