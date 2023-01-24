import { authSlice } from './authSlice'
import { createSlice } from '@reduxjs/toolkit'
import { IProfile } from './../../types/IProfile'
import { PayloadAction } from '@reduxjs/toolkit'

type ProfileState = {
  profile: IProfile | null
  status: string | null
  errors: Array<string>
  posts: Array<any>
}

const initialState: ProfileState = {
  posts: [
    {
      id: 1,
      author: 'Chuvak 1',
      text: 'Text posta 1',
      avatar:
        'https://pict.sindonews.net/dyn/732/pena/news/2022/01/13/39/655579/harga-fotofoto-ghozali-bikin-melongo-ada-yang-laku-rp42-miliiar-fwx.jpg',
      likesCount: 0,
    },
  ],
  profile: null,
  status: '',
  errors: [],
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setStatus(state, action: PayloadAction<string>) {
      state.status = action.payload
    },
    setErrors(state, action: PayloadAction<Array<string>>) {
      state.errors = action.payload
    },
    setProfile(state, action: PayloadAction<IProfile>) {
      state.profile = action.payload
    },
  },
})

export default authSlice.reducer
