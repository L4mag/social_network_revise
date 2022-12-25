const SET_USERS = 'SET_USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

const initialState = {
  users: [
    // {
    //   id: 1,
    //   name: 'Chuvak 1',
    //   status: 'Text statusa 1',
    //   location: 'Moscow, Russia',
    //   avatar:
    //     'https://pict.sindonews.net/dyn/732/pena/news/2022/01/13/39/655579/harga-fotofoto-ghozali-bikin-melongo-ada-yang-laku-rp42-miliiar-fwx.jpg',
    //   isFollowed: false,
    // },
    // {
    //   id: 2,
    //   name: 'Chuvak 2',
    //   status: 'Text statusa 2',
    //   location: 'Moscow, Russia',
    //   avatar:
    //     'https://pict.sindonews.net/dyn/732/pena/news/2022/01/13/39/655579/harga-fotofoto-ghozali-bikin-melongo-ada-yang-laku-rp42-miliiar-fwx.jpg',
    //   isFollowed: true,
    // },
    // {
    //   id: 3,
    //   name: 'Chuvak 3',
    //   status: 'Text statusa 3',
    //   location: 'Moscow, Russia',
    //   avatar:
    //     'https://pict.sindonews.net/dyn/732/pena/news/2022/01/13/39/655579/harga-fotofoto-ghozali-bikin-melongo-ada-yang-laku-rp42-miliiar-fwx.jpg',
    //   isFollowed: false,
    // },
  ],
  currentPage: 1,
  usersCount: 100,
  pageSize: 6,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload.users }
    case FOLLOW:
      return {
        ...state,
        users: [
          ...state.users.map((user) =>
            user.id === action.payload.id
              ? { ...user, isFollowed: true }
              : user
          ),
        ],
      }
    case UNFOLLOW:
      return {
        ...state,
        users: [
          ...state.users.map((user) =>
            user.id === action.payload.id
              ? { ...user, isFollowed: false }
              : user
          ),
        ],
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload.page,
      }
    default:
      return state
  }
}

export const setUsersActionCreator = (users) => ({
  type: SET_USERS,
  payload: { users },
})
export const followUserActionCreator = (id) => ({
  type: FOLLOW,
  payload: { id },
})

export const unFollowUserActionCreator = (id) => ({
  type: UNFOLLOW,
  payload: { id },
})

export const setCurrentPageActionCreator = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: { page },
})

export default userReducer
