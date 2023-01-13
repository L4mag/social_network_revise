const ADD_MESSAGE = 'ADD_MESSAGE'
const HANDLE_ADD_MESSAGE_INPUT = 'HANDLE_ADD_MESSAGE_INPUT'

const initialState = {
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
}

type InitialStateType = typeof initialState

const DialogsReducer = (
  state = initialState,
  action: { type: any; payload?: { text: any } }
): InitialStateType => {
  switch (action.type) {
    case ADD_MESSAGE:
      if (state.newMessageText !== '') {
        return {
          ...state,
          dialogs: [
            ...state.dialogs.map((d) =>
              d.id === 1
                ? {
                    ...d,
                    messages: [
                      ...d.messages,
                      state.newMessageText,
                    ],
                  }
                : d
            ),
          ],
          newMessageText: '',
        }
      } else {
        return state
      }
    case HANDLE_ADD_MESSAGE_INPUT:
      // @ts-ignore
      return {
        ...state,
        newMessageText: action.payload.text,
      }
    default:
      return state
  }
}

export const addMessage = () => ({
  type: ADD_MESSAGE,
})
export const handleAddMessageInput = (text: any) => ({
  type: HANDLE_ADD_MESSAGE_INPUT,
  payload: { text },
})

export default DialogsReducer

// // ...state.dialogs,
// // ...state.dialogs.map((d) => {
// //   // debugger
//   if (d.id === 1) {
//     const temp = {
//       ...d,
//       messages: [
//         ...d.messages,
//         state.newMessageText,
//       ],
//     }
//     return temp
//   }
// // }),
