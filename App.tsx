import { Routes } from "./src/Routes"
import { AuthContext } from "./src/context/authContext"

export default function App(){
  return(
    <AuthContext.Provider value={{
      id: '1',
      role: 'agente',
      name: 'Jose Candido'
    }}>
      <Routes/>
    </AuthContext.Provider>
  )
};