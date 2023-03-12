import { useEffect, useState } from "react"
import { API } from "Api"
import reactLogo from "./assets/react.svg"
import { IUsers } from "src/types/types"
import { RootStore } from "src/store"
import { observer } from "mobx-react-lite"

const store = RootStore.create({})

export const App = observer(() => {
  console.log("store", store.users.users)

  return (
    <div className="App">
      {store.users.users?.map((item) => {
        return (
          <div key={item.id}>
            <div>{item.id}</div>
            <img src={item.avatar} alt="avatar" />
            <div>{item.name}</div>
            <div>{item.createdAt}</div>
          </div>
        )
      })}
    </div>
  )
})
