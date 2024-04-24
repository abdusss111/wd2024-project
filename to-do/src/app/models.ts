export interface User {
  username: string
  id: number
  name: string
  lastname: string
  password: string
  email: string
  isLeader: boolean
  photoUrl: string
  team: string
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


export interface Task {
  title: string;
  taskText: string;
  deadline: Date;
  folder: string;
  user_id: number;
}
