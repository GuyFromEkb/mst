export interface IUser {
  id: string
  createdAt: Date
  name: string
  avatar: string
}

export type IUsers = IUser[]

interface IBoardSection {
  id: string
  title: string
}

interface IBoard {
  id: string
  title: string
  sections: IBoardSection[]
}

type IBoards = IBoard[]

interface ITask {
  id: string
  tasks: {
    id: string
    title: string
    description: string
    assignee: string
  }
}
