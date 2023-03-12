import { useEffect, useState } from "react"
import { API } from "Api"
import reactLogo from "./assets/react.svg"

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const a = async () => {
      const res = await API.get("users")
      console.log("res", res)
    }
    a()
  }, [])

  return <div className="App">Hy</div>
}

export default App
