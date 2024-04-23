export interface User {
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