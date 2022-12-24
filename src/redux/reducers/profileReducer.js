const ADD_POST = 'ADD_POST'
const HANDLE_ADD_POST_INPUT = 'HANDLE_ADD_POST_INPUT'

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
}

const profileReducer = (state = initialState, action) => {
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
    default:
      return state
  }
}

export const addPostActionCreator = () => ({
  type: ADD_POST,
})
export const handleAddPostInputActionCreator = (text) => ({
  type: HANDLE_ADD_POST_INPUT,
  payload: { text },
})

export default profileReducer
