import Login from './components/Profile'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Login'

function App() {
  
  return (
    <UserContextProvider>
      <h1>React with sujeet and context api learning</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
