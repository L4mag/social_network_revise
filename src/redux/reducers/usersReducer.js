const SET_USERS = 'SET_USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

const initialState = {
  users: [
    {
      id: 1,
      name: 'Chuvak 1',
      status: 'Text statusa 1',
      place: 'Moscow, Russia',
      avatar:
        'https://pict.sindonews.net/dyn/732/pena/news/2022/01/13/39/655579/harga-fotofoto-ghozali-bikin-melongo-ada-yang-laku-rp42-miliiar-fwx.jpg',
      isFollowed: false,
    },
    {
      id: 2,
      name: 'Chuvak 2',
      status: 'Text statusa 2',
      place: 'Moscow, Russia',
      avatar:
        'https://pict.sindonews.net/dyn/732/pena/news/2022/01/13/39/655579/harga-fotofoto-ghozali-bikin-melongo-ada-yang-laku-rp42-miliiar-fwx.jpg',
      isFollowed: true,
    },
    {
      id: 3,
      name: 'Chuvak 3',
      status: 'Text statusa 3',
      place: 'Moscow, Russia',
      avatar:
        'https://pict.sindonews.net/dyn/732/pena/news/2022/01/13/39/655579/harga-fotofoto-ghozali-bikin-melongo-ada-yang-laku-rp42-miliiar-fwx.jpg',
      isFollowed: false,
    },
  ],
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, ...action.payload.users }
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
    default:
      return state
  }
}

export const setUsersActionCreator = () => ({
  type: SET_USERS,
})
export const followUserActionCreator = (id) => ({
  type: FOLLOW,
  payload: { id },
})

export const unFollowUserActionCreator = (id) => ({
  type: UNFOLLOW,
  payload: { id },
})

export default userReducer
