export interface User {
  username: string
  id: number
  name: string
  lastname: string
  password: string
  email: string
  isLeader: boolean
  photo: string
  team_id: number
}

export interface Team {
  id?: number
  name: string
}
export interface Folder {
  id: number
  name: string
  user_id: number
}

export interface Token {
  access: string;
  refresh: string;
}
