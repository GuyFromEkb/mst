import { types as t, flow, Instance, applySnapshot } from "mobx-state-tree"

import { API } from "src/api"

const User = t.model("User", {
  id: t.identifier,
  createdAt: t.string,
  name: t.string,
  avatar: t.string,
})
type TUser = Instance<typeof User>

export const UsersStore = t
  .model("UsersStore", {
    users: t.maybe(t.array(User)),
  })
  .actions((self) => {
    const load = flow(function* () {
      const response: TUser[] = yield API.get("users")

      //НУЖНО ШОБЫ РАБОТАЛО ТАК НО МЕНЯ ЗАЕБАЛ ТАЙПСКРИПТ
      //Так не работает ( падает приложение)
      // но я как понял делается всё именно так
      // self.users = t.array(User).create(response)

      //Работает!
      // так всё работает, но ругается тайпскрипт, и как я понял так не делается!
      self.users = response

      //Работает!
      //так делается, всё работает  но ругается тайпскрипт
      // self.users = response.map((user) => User.create(user))

      //Работает!
      // есть ещё такой вариант , но если присваивать вот это => t.array(User).create(response) .то ошибка
      //Вроде так тоже не делается
      // applySnapshot(self, {
      //   users: response,
      // })
    })

    const afterCreate = () => {
      load()
    }
    return { load, afterCreate }
  })
