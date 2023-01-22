import { profilesAPI } from '../../api/api'
import {
  ApiProfileType,
  ServerMessages,
} from '../../types/types'

const ADD_POST = 'ADD_POST'
const HANDLE_ADD_POST_INPUT = 'HANDLE_ADD_POST_INPUT'
const SET_PROFILE = 'SET_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SET_MESSAGES = 'SET_MESSAGES'

const initialState = {
  newPostInput: '',
  avatar:
    'https://sun9-81.userapi.com/impg/RFa_hHslLxbaH3K8pEhHmywx5Tb_5QMeHfrJDg/V7dgRaa8x2s.jpg?size=720x960&quality=96&sign=55d75e3f8afa6b56b1c366aea96da068&type=album',
  posts: [
    {
      id: 1,
      author: 'Chuvak 1',
      text: 'Text posta 1',
      avatar:
        'https://pict.sindonews.net/dyn/732/pena/news/2022/01/13/39/655579/harga-fotofoto-ghozali-bikin-melongo-ada-yang-laku-rp42-miliiar-fwx.jpg',
      likesCount: 0,
    },
    {
      id: 2,
      author: 'Chuvak 2',
      text: 'Text posta 2',
      avatar:
        'https://pict.sindonews.net/dyn/732/pena/news/2022/01/13/39/655579/harga-fotofoto-ghozali-bikin-melongo-ada-yang-laku-rp42-miliiar-fwx.jpg',
      likesCount: 0,
    },
    {
      id: 3,
      author: 'Chuvak 3',
      text: 'Text posta 3',
      avatar:
        'https://pict.sindonews.net/dyn/732/pena/news/2022/01/13/39/655579/harga-fotofoto-ghozali-bikin-melongo-ada-yang-laku-rp42-miliiar-fwx.jpg',
      likesCount: 0,
    },
  ],
  profile: null,
  status: null,
  isProfile: false,
  messages: [] as any,
}

type InitialStateType = typeof initialState

const profileReducer = (
  state = initialState,
  action: { type: any; payload?: any }
): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      if (state.newPostInput !== '') {
        const post = {
          id: 5,
          author: 'Chuvak 1',
          text: state.newPostInput,
          avatar:
            'https://pict.sindonews.net/dyn/732/pena/news/2022/01/13/39/655579/harga-fotofoto-ghozali-bikin-melongo-ada-yang-laku-rp42-miliiar-fwx.jpg',
          likesCount: 0,
        }

        const newPostInput = ''
        return {
          ...state,
          posts: [...state.posts, post],
          newPostInput,
        }
      } else {
        return state
      }
    case HANDLE_ADD_POST_INPUT:
      const text = action.payload.text
      return { ...state, newPostInput: text }
    case SET_PROFILE:
      return {
        ...state,
        profile: { ...action.payload.profile },
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.payload.status,
      }
    case SET_MESSAGES: {
      const temp = [...action.payload.messages]
      debugger

      return {
        ...state,
        messages: [...action.payload.messages],
      }
    }
    default:
      return state
  }
}

export const addPost = () => ({
  type: ADD_POST,
})
export const handleAddPostInput = (text: string) => ({
  type: HANDLE_ADD_POST_INPUT,
  payload: { text },
})

export const setProfile = (profile: ApiProfileType) => ({
  type: SET_PROFILE,
  payload: { profile },
})

const setStatus = (status: any) => ({
  type: SET_STATUS,
  payload: { status },
})

export const setErrorMessages = (
  messages: ServerMessages
) => ({
  type: SET_MESSAGES,
  payload: { messages },
})

export const postProfilePhoto =
  (photoFile: FileList, profileId: number) =>
  (dispatch: any) => {
    profilesAPI.setProfilePhoto(photoFile).then((res) => {
      dispatch(setProfileThunkCreator(profileId))
    })
  }

export const setProfileThunkCreator =
  (profileId: number) => (dispatch: any) => {
    profilesAPI.getUserProfile(profileId).then((data) => {
      dispatch(setProfile(data))
    })
  }

export const postProfile =
  (profileData: ApiProfileType) => (dispatch: any) => {
    profilesAPI
      .postUserProfile(profileData)
      .then((response) => {
        if (response.resultCode === 1) {
          dispatch(setErrorMessages(response.messages))
        }
        dispatch(setProfileThunkCreator(profileData.userId))
      })
  }

export const requestStatus =
  (userId: number) => (dispatch: any) => {
    profilesAPI.getUserStatus(userId).then((response) => {
      dispatch(setStatus(response))
    })
  }

export const pushNewStatus =
  (status: string, userId: number) => (dispatch: any) => {
    profilesAPI.setUserStatus(status).then(() => {
      debugger
      dispatch(requestStatus(userId))
    })
  }

export default profileReducer
