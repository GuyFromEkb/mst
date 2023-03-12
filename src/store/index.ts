import { types as t } from "mobx-state-tree"
import { BoardsStore } from "./board"
import { UsersStore } from "./users"

export const RootStore = t.model("RootStore", {
  users: t.optional(UsersStore, {}),
  boards: t.optional(BoardsStore, {}),
})
