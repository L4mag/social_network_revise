import { PhotoType } from './types'

export interface IUser {
  name: string | null
  id: number | null
  uniqueUrlName: string | null
  photos: PhotoType
  status: string | null
  followed: boolean
}
