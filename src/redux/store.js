import dialogsPageReducer from './reducers/dialogsReducer'
import profileReducer from './reducers/profileReducer'

const store = {
  _subscriber() {
    console.log('No subscriber function were passed')
  },

  _state: {
    profilePage: {
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
    },
    dialogsPage: {
      newMessageText: '',
      dialogs: [
        {
          id: 1,
          name: 'Chuvak 1',
          messages: [
            'Text soobsheniya 1',
            'Text soobsheniya 2',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci fuga ipsam libero perspiciatis ratione reprehenderit, similique sint vitae? Cum ducimus ipsam laborum magnam natus nemo nisi possimus repellendus? Magni, non.',
          ],
          img: 'https://pict.sindonews.net/dyn/732/pena/news/2022/01/13/39/655579/harga-fotofoto-ghozali-bikin-melongo-ada-yang-laku-rp42-miliiar-fwx.jpg',
        },
        {
          id: 2,
          name: 'Chuvak 2',
          messages: ['Text soobsheniya 2'],
          img: 'https://pict.sindonews.net/dyn/732/pena/news/2022/01/13/39/655579/harga-fotofoto-ghozali-bikin-melongo-ada-yang-laku-rp42-miliiar-fwx.jpg',
        },
        {
          id: 3,
          name: 'Chuvak 3',
          messages: ['Text soobsheniya 3'],
          img: 'https://pict.sindonews.net/dyn/732/pena/news/2022/01/13/39/655579/harga-fotofoto-ghozali-bikin-melongo-ada-yang-laku-rp42-miliiar-fwx.jpg',
        },
      ],
    },
  },

  getState() {
    return this._state
  },

  dispatch(action) {
    this._state.dialogsPage = dialogsPageReducer(
      this._state.dialogsPage,
      action
    )
    this._state.profilePage = profileReducer(
      this._state.profilePage,
      action
    )

    this._subscriber(this._state)
  },

  subscribe(observer) {
    this._subscriber = observer
  },
}

export default store
