import { StringOrNull, PhotoType } from './types'

export interface IProfile {
  aboutMe: StringOrNull
  contacts: {
    facebook: StringOrNull
    website: StringOrNull
    vk: StringOrNull
    twitter: StringOrNull
    instagram: StringOrNull
    youtube: StringOrNull
    github: StringOrNull
    mainLink: StringOrNull
  }
  lookingForAJob: boolean
  lookingForAJobDescription: StringOrNull
  fullName: string
  userId: number
  photos?: PhotoType
}
