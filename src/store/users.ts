import { types as t, flow } from "mobx-state-tree"

import { API } from "src/api"
import { IUser } from "src/types/types"

const User = t.model("User", {
  id: t.identifier,
  createdAt: t.string,
  name: t.string,
  avatar: t.string,
})

export const UsersStore = t
  .model("UsersStore", {
    users: t.maybe(t.array(User)),
  })
  .actions((self) => {
    const load = flow(function* () {
      self.users = yield API.get("users")
    })

    const afterCreate = () => {
      load()
    }
    return { load, afterCreate }
  })
